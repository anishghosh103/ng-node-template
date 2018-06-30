const http = require('http');
const mongoose = require('mongoose');

const config = require('./config');

const app = require('./app');
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
  mongoose.connect(config.db.uri, (err) => {
    if (err) {
      console.log('MongooseConnectionError', err);
    } else {
      console.log('MongooseConnectionSuccessful', config.db.name);
    }
  });
});