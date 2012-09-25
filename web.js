var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
 
// handler = function(req, res) {
//   url = URL.parse(req.url);
 
//   if (req.method == 'GET') {
//     path = url.pathname.split('/');
//     resources = path[path.length - 2];
//     id = path[path.length - 1];
 
//     if (resources == 'messages') {
//       message = database[id];
 
//       var body = {
//         "message" : message
//       };
 
//       res.writeHead(200, {
//         'Content-Type' : 'application/json'
//       });
//       res.end(JSON.stringify(body));
//     }
//   }
 
// };