var http = require('http');
var localtunnel = require('localtunnel');

//Lets define a port we want to listen to
const PORT=8080;

http.createServer(function(request, response) {
  var headers = request.headers;
  var method = request.method;
  var url = request.url;
  var body = [];
  request.on('error', function(err) {
    console.error(err);
  }).on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    response.end();

    console.log(new Date()+" ~ "+unescape(body));
  });
}).listen(PORT, function(){
  var tunnel = localtunnel(PORT, function(err, tunnel) {
      if (err) {
        console.log(err);
      }
      console.log("Server listening on: %s", tunnel.url);
  });
});
