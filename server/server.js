const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist/')));

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}...`);
});