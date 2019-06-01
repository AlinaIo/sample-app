'use strict';

const mongo = require('../config/db');
const Boom = require('@hapi/boom');
const faker = require('faker');

exports.plugin = {
    name: 'plugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/mongo',
            handler: async function (request, h) {
                const db = await mongo.mongoConnection();
                if(db.error) {
                    console.log('============' + db.error);
                    return Boom.serverUnavailable("MongoDB is not available!");
                }

                const data = { 'Description': 'MongoDB is up and running!' }
                return h.response(data).code(200)
            }
        });

        server.route({
            method: 'POST',
            path: '/dummy',
            handler: async function (request, h) {
                const db = await mongo.mongoConnection();
                try {                    
                    const dummy = db.collection('dummy');
                    let fakeData = [];
                    for (let i = 10; i >= 0; i--) {
                        // Create a person object.
                        const person = {
                                name: faker.name.firstName(),
                                email: faker.internet.email(),
                                number: faker.phone.phoneNumber(),
                                userName: faker.internet.userName(),
                            }
                        fakeData.push(person);
                    }
                    await dummy.insertMany(fakeData);
                    return h.response("Documents added to MongoDB.").code(201);
                } catch(error) {
                    console.log('============' + error);
                    return Boom.badImplementation('Failed to insert document.');
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/time',
            handler: async function (request, h) {                
                return h.response().code(200)
            }
        });
    }
};