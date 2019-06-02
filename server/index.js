require('dotenv').config();

const Hapi = require('@hapi/hapi');
const config = require('./config/config');
const init = async () => {
    const server = Hapi.server({
        port: 8080,
        host: '0.0.0.0',
        routes: {
            cors: true
        }
    });

    await server.register([require('./plugins/plugin'), require('hapi-response-time')]);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();