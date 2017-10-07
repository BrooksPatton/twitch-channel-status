const axios = require('axios');

function auth() {
  const baseUrl = 'https://api.twitch.tv/kraken/oauth2/token/';
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const url = `https://api.twitch.tv/kraken/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`;

  return axios.post(url, {})
    .then(res => res.data);
}

module.exports = {
  auth
};
