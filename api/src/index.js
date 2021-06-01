const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers')
const app = express();
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('ok');
});

app.use('/products', controllers.products);

app.listen(5000);