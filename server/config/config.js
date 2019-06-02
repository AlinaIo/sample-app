module.exports = {
    mongoUrl: process.env.DB_URL || 'mongodb://admin:admin@mongo:27017',
    dbName: process.env.DB_NAME || 'dummydb'
};
