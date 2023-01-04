const expressStaticGzip = require('express-static-gzip');
require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rerouteToAPI = require('./rerouteToAPI.js');
const { authentication } = require('./authentication.js');

const app = express();

app.use(morgan('tiny'));
app.use(authentication);
app.use(express.json());
app.use(expressStaticGzip(path.join(__dirname, '../client/dist/'), {
  enableBrotli: true
  }));
app.all('/products*', rerouteToAPI);
app.all('/reviews*', rerouteToAPI);
app.all('/qa*', rerouteToAPI);
app.all('/cart*', rerouteToAPI);
app.all('/interactions*', rerouteToAPI);

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}...`);
});