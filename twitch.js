const axios = require('axios');

const cache = {
  lastSaved: null,
  data: null
};


function auth() {
  const baseUrl = 'https://api.twitch.tv/kraken/oauth2/token/';
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const url = `https://api.twitch.tv/kraken/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`;

  return axios.post(url, {})
    .then(res => res.data);
}

function getStream() {
  const client_id = process.env.CLIENT_ID;

  if(shouldUseCache(cache)) {
    return Promise.resolve(cache.data);
  } else {
    return axios.get('https://api.twitch.tv/helix/streams?user_login=brookzerker', {
        headers: {"Client-ID": client_id}
        })
      .then(res => res.data.data[0])
      .then(data => {
        cache.lastSaved = Date.now();
        cache.data = data;
        return cache.data;
      })
      .catch(err => {
        if(err.response.status === 503) {
          return cache.data;
        }

        throw err;
      });
  }
}

function shouldUseCache(cache) {
  const now = Date.now();
  const validTime = 1000 * 60 * 5; // 5 minutes

  return now - cache.lastSaved <= validTime;
}

module.exports = {
  auth,
  getStream
};
