const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers')
const app = express();
const cors = require('cors');
const path = require ('path')


app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('ok');
});

app.use('/products', controllers.products);
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))

app.listen(process.env.PORT || 5000);