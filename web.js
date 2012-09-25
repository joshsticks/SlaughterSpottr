var express = require('express'),
    path = require("path"),
    mongoose = require('mongoose');

var app = express.createServer(express.logger());

// Database
mongoose.connect('mongodb://localhost/ecomm_database');

// Config
app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "public")));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/api/count', function(request, response) {
  response.send({count:12});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});