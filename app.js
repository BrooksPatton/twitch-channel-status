require('dotenv').config()

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/api/stream-status', (req, res, next) => {
    .then(response => {
      console.log(response.data);
    })
    .catch(err => next(err));
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
