'use strict';

const config = require('./config');
const MongoClient = require('mongodb').MongoClient;

module.exports = {
  mongoConnection: async () => {
    let client;

    try {
      client = await MongoClient.connect(config.mongoUrl, { useNewUrlParser: true });

      return client;
    } catch(error) {
      return { error: error };
    }
  }
}