var express = require('express');
var pg = require('pg');

var client = new pg.Client('postgres://jzjnyhhuadkjih:nFfX92G0Vo5oQTnoXThkaT9MKV@ec2-54-243-228-4.compute-1.amazonaws.com:5432/d2le9eigheli01');
client.connect();
var query = client.query('CREATE TABLE locations (string string date)');
//query.on('end', function() { client.end(); });

var app = express.createServer(express.logger());

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.configure(function () {
  app.use(allowCrossDomain);
});

app.get('/api/count', function(request, response) {
  response.send({count:4});
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
  response.send('Success');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});