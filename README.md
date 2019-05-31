# sample-app

The project contains a docker-compose that starts 3 instances: Mongo, Node.js and Nginx.

On the Node.js instance there is a HapiJS server with 3 endpoints:
- 1 GET that checks connection to mongodb
- 1 POST that generates dummy data
- 1 endpoint that returns the data agregation time

On the Mongo instange there is a mongodb.

The Nginx instance serves a React app static content (after build)
The React app has a Login that stores the user in a mobx state. Login is possible only if the "existing connection" from the API returns 200.

We have a 2 page menu:
    First page has a button that once clicked calls the dummy data generation endpoint.
    Second page displayes aggregation time (from the third endpoint)

Useful links:
https://hapijs.com/tutorials
