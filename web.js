var express = require('express');


var app = express.createServer(express.logger());

app.get('/api/count', function(request, response) {
  response.send({count:6});
});

app.get('/api/list', function(request, response) {
  response.send({
    1: { lat:37.546551,lon:-77.451382 }
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});