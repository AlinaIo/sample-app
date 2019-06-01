'use strict';

const {config} = require('./config');

const MongoClient = require('mongodb').MongoClient;

module.exports = {
  mongoConnection: async () => {
    let db, client;
    try {
      client = await MongoClient.connect(config.mongoUrl, { useNewUrlParser: true });
      db = await client.db(config.dbName);
      
      return db;
    } catch(error) {
      return {
        error: error
      };
    }
  }
}