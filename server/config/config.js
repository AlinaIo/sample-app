const config = {
    mongoUrl: process.env.DB_URL || '',
    dbName: process.env.DB_NAME || ''
};
module.exports = {config};