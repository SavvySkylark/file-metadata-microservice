
var express = require('express');
var router = express.Router();
var formidable = require('formidable');

/* GET home page. */
router.post('/get-file-size', function(req, res, next) {
  var form = new formidable.IncomingForm();
  var fileSizeRes;
  form.parse(req);
  form.on('file', function(name, file) {
    fileSizeRes = { 'file': file.size};
  });
  form.on('end', function() {
    res.end(JSON.stringify(fileSizeRes));
  });
});

module.exports = router;