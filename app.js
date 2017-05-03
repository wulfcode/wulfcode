const express = require('express');
const path = require('path');
const app = express();

const utils = require('./app/utils');
const quotes = require('./messages/quotes.json');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/templates'));
app.use(express.static('dist'));

app.get('/', function (req, res) {
  const quoteObj = utils.randomElement(quotes.quotes);
  const key = Object.keys(quoteObj)[0];
  res.render('index', {
    quote: quoteObj[key],
    author: key
  });
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
});
