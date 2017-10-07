require('dotenv').config()
const chai = require('chai');
const {auth} = require('../twitch');

const should = chai.should();

describe('Twich Auth', () => {
  it('should result in an access token', done => {
    auth()
      .then(token => {
        should.exist(token.access_token);
        should.exist(token.refresh_token);
        should.exist(token.scope);
        should.exist(token.expires_in);
        token.access_token.should.be.a('string');
        token.refresh_token.should.equal('');
        token.scope.should.deep.equal([]);
        token.expires_in.should.be.a('number');

        done();
      })
      .catch(err => done(err));
  });
});
