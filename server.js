var http = require('http');

var server = http.createServer(function (request, response) 
{
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("VGG Docker Task...");
});

server.listen(3333);

console.log("Node HTTP Server started at http://localhost:3333/");