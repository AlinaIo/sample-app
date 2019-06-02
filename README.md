# sample-app

The project contains a docker-compose that starts 3 instances: Mongo, Node.js and Nginx.

On the Node.js instance there is a HapiJS server with a plugin that exposes 3 endpoints:
- 1 GET that checks connection to mongodb
- 1 POST that generates dummy data
- 1 endpoint that returns the data agregation time

On the Mongo instange there is a mongodb.

The Nginx instance serves a React app static content (after build)
The React app has a Login that stores the user in a mobx state. Login is possible only if the "existing connection" from the API returns 200.

We have a 2 page menu:  
First page has a button that once clicked calls the dummy data generation endpoint.  
Second page displayes aggregation time (from the third endpoint)  

#### To run the application:  
```git clone https://github.com/AlinaIo/sample-app.git```  
Go to the sample-app folder and just run:  
```docker-compose up```  
server will be available at http://localhost:8080  
and client served by nginx at http://localhost  

Useful links:  
https://hapijs.com/tutorials  
https://hapijs.com/tutorials/plugins  
https://hapijs.com/plugins  
https://www.npmjs.com/package/faker  
https://stackoverflow.com/questions/16122234/how-to-commit-a-change-with-both-message-and-description-from-the-command-li  
https://dillinger.io/  
https://www.nginx.com/resources/wiki/start/topics/examples/full/  
https://stackoverflow.com/questions/33850836/nginx-successfully-serves-static-assets-but-they-do-not-render-in-the-browser  
https://mobx.js.org/getting-started.html  
https://www.youtube.com/watch?v=GQCJbRbA9Ms  
https://github.com/Microsoft/vscode/issues/45071  
https://www.npmjs.com/package/hapi-response-time  
https://stackoverflow.com/questions/49478518/  
https://www.robinwieruch.de/create-react-app-mobx-decorators/store-somestore-is-not-available-make-sure-it-is-provided-by-some-provider  
https://www.w3schools.com/css/css_navbar.asp?fbclid=IwAR1Q3NBB5KDjOv7TZLxwcGOEq0iHx3zoKJpGQ0Fbmy9QPVqLlhxnoWiGoIs  
https://codepen.io/tkraak/pen/pbwJVN?fbclid=IwAR3-CbmfZltbRdL2cxlp03kYd2uf_tPLGR2dIGglhlK_5IsjX9Wb00dr3q0  
https://codepen.io/tristanS26/pen/MyYZjX  
https://codepen.io/fliao/pen/wrKYWN  
