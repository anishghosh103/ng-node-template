const config = {};

config.port = 3000;

config.db = {
  // TODO: edit name of database
  name: 'somename',
  uri: `mongodb://127.0.0.1:27017/${this.name}`
}

// TODO: change the 'baseUrl'
config.baseUrl = `http://localhost:${config.port}`;

module.exports = config;