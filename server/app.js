const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(require('./mids/route-logger'));
app.use('/api', require('./api'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.use(require('./mids/not-found-handler'));
app.use(require('./mids/global-error-handler'));

module.exports = app;