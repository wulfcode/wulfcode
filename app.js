const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/templates'));
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
