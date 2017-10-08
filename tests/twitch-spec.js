require('dotenv').config()
const chai = require('chai');
const {auth, getStream} = require('../twitch');

const should = chai.should();
const oneMinute = 1000 * 60 * 60;

describe('Twich Auth', function() {
    this.timeout(oneMinute);

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

describe('Twitch Get Streams', () => {
  it('should result in stream information about brookzerkers stream', done => {
    getStream()
      .then(stream => {
        if(stream === undefined) {
          done();
        } else {
          stream.id.should.be.a('string');
          stream.user_id.should.be.a('string');
          stream.game_id.should.be.a('string');
          stream.community_ids.should.be.a('array');
          stream.type.should.equal('live');
          stream.title.should.be.a('string');
          stream.viewer_count.should.be.a('number');
          stream.started_at.should.be.a('string');
          stream.language.should.equal('en');
          stream.thumbnail_url.should.be.a('string');
          done();
        }
      })
      .catch(err => done(err));
  });
});
