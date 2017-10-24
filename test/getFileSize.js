var chai = require('chai');
var chaiHttp = require('chai-http');
var fs = require('fs');
var expect = chai.expect;
var port = process.env.PORT;
var host = process.env.HOST;
var basePath = 'http://${host}:${port}';


chai.use(chaiHttp);

describe('Upload', () => {
  it('has size', (done) => {

    chai.request(basePath)
    .post('/get-file-size')
    .attach('file', )
    .send()
  });

});
