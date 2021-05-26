const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers')
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('ok');
});

app.use('/products', controllers.products);

app.listen(5000);