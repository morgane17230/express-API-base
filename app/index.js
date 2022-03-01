const express = require('express');

const routes = require('./routes/');
const sanitizer = require("./middleware/sanitizer");

const app = express();

app.use(express.json());

app.use(express.static(__dirname + '/public'));
app.use(sanitizer);
app.use(routes);

app.use((_, res) => {
  res
  .status(404)
  .send('Oups, mauvaise route');
});

module.exports = app;