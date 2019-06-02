'use strict';

const mongoClient = require('../config/db');
const config = require('../config/config');
const Boom = require('@hapi/boom');
const faker = require('faker');
const assert = require('assert');

exports.plugin = {
    name: 'plugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/',
            handler: async function (request, h) {
                const data = { 'Description': 'Yep! I am the server!' }

                return h.response(data).code(200);
            }
        });

        server.route({
            method: 'GET',
            path: '/mongo',
            handler: async function (request, h) {
                let client;
                
                try {  
                    client = await mongoClient.mongoConnection();
                    if(client.error) {
                        console.log('============' + client.error);

                        return Boom.serverUnavailable("MongoDB is not available!");
                    }

                    const data = { 'Description': 'MongoDB is up and running!' }

                    return h.response(data).code(200)
                } catch(error) {
                    console.log('============' + error);

                    return Boom.serverUnavailable("MongoDB is not available!");
                } finally {
                    client.close();
                }
            }
        });

        server.route({
            method: 'POST',
            path: '/dummy',
            handler: async function (request, h) {
                let client;

                try {                    
                    client = await mongoClient.mongoConnection();
                    const db = await client.db(config.dbName);
                    const dummy = db.collection('dummy');
                    let fakeData = [];

                    for (let i = 300; i >= 1; i--) {
                        // Create a person object.
                        const person = {
                                name: faker.name.firstName(),
                                email: faker.internet.email(),
                                number: faker.phone.phoneNumber(),
                                userName: faker.internet.userName(),
                                country: faker.address.country(),
                            }
                        fakeData.push(person);
                    }
                    await dummy.insertMany(fakeData);

                    return h.response("Documents added to MongoDB.").code(201);
                } catch(error) {
                    console.log('============' + error);

                    return Boom.badImplementation('Failed to insert document.');
                } finally {
                    client.close();
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/aggregate',
            handler: async function (request, h) {       
                let client;

                try {                    
                    client = await mongoClient.mongoConnection();
                    const db = await client.db(config.dbName);                    
                    const col = db.collection('dummy');
                    let timeStart=Date.now();

                    col.aggregate( 
                        [ 
                            { $match : { country : "Norway" } } ,
                            { $group: { _id: null, count: { $sum: 1 } } }	
                        ]).next(function(err, doc) {
                            assert.equal(null, err);
                            console.log(doc);
                        });

                    let responseTime = Date.now() - timeStart;
                    let data = { 'responseTime': responseTime }

                    return h.response(data).code(200);
                } catch(error) {
                    console.log('============' + error);

                    return Boom.serverUnavailable("MongoDB is not available!");
                } finally {
                    client.close();
                }
            }
        });
    }
};