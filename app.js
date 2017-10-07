require('dotenv').config()

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/api/stream-status', (req, res, next) => {
  const baseUrl = 'https://api.twitch.tv/kraken/oauth2/token/';
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const url = `https://api.twitch.tv/kraken/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`;

  axios.post(url, {})
    .then(response => {
      console.log(response.data);
    })
    .catch(err => next(err));
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
