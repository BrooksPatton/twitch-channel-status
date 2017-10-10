const express = require('express');
const cors = require('cors');
const twitch = require('./twitch');

const app = express();

app.use(cors());

app.get('/api/streaming-status', (req, res, next) => {
  twitch.getStream()
    .then(stream => {
      const response = {
        status: stream ? true : false
      };

      res.json(response);
    })
    .catch(err => {
      console.error('Error getting twitch stream');
      console.error(err);
      next(err);
    });
});

module.exports = app;
