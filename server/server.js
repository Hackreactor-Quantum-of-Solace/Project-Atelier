require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const { authentication } = require('./authentication.js');

const app = express();

app.use(morgan('tiny'));
app.use(authentication);
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.all('/*', (req, res) => {
  axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp${req.url}`, {
    method: req.method,
    headers: { Authorization: req.headers.Authorization }
  })
  .then(response => res.status(200).send(response.data))
  .catch(err => console.log(`error getting data from api`, err));
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}...`);
});