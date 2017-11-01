var express = require('express');
var path = require('path');
var formidable = require('formidable');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));


app.post('/get-file-size', function(req, res, next) {
  var form = new formidable.IncomingForm();
  var fileSizeRes;
  form.parse(req);
  form.on('file', function(name, file) {
    fileSizeRes = { 'file': file.size};
  });
  form.on('end', function() {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(fileSizeRes));
  });
});

app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
