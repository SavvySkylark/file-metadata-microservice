var chai = require('chai');
var chaiHttp = require('chai-http');
var fs = require('fs');
var expect = chai.expect;
var port = process.env.PORT || '3000';
var host = process.env.HOST || 'localhost';
// var host = 'localhost';
// var port = '3000';
var basePath = `http://${host}:${port}`;

chai.use(chaiHttp);

describe('Upload', () => {
  it('has size', (done) => {

    chai.request(basePath)
      .post('/get-file-size')
      .attach('file', fs.readFileSync('./test/testFile.txt'), 'file.txt')
      .end(function(err, res) {
        expect(err).to.be.null;
        var body = JSON.parse(res.text);
        expect(body.file).to.be.above(0);
        done();
      });
  });

});
