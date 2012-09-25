var express = require('express');


var app = express.createServer(express.logger());

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/api/count', function(request, response) {
  response.send({count:6});
});

app.get('/api/list', function(request, response) {
  response.send({
    1: { lat:37.546551, lon:-77.451382, date: '09/24/2012' },
    2: { lat:37.545866, lon:-77.456539, date: '09/21/2012' },
    3: { lat:40.052939, lon:-75.129876, date: '09/02/2012' },
    4: { lat:37.677435, lon:-77.549744, date: '09/14/2012' }
  });
});

app.put('/api/add', function(request, response) {
  response.send('added');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});