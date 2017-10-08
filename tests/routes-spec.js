const chai = require('chai');
const supertest = require('supertest');
const app = require('../app');

const should = chai.should();
const api = supertest(app);

describe('API/streaming-status routes', () => {
  it('sending a get request to /api/streaming-status should result in a true false', done => {
    api.get('/api/streaming-status')
      .expect(200)
      .end((err, res) => {
        if(err) return done(err);

        res.body.status.should.be.a('boolean');
        done();
      });
  });
});
