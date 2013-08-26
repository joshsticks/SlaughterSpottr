var pg = require('pg');

var client = new pg.Client('postgres://hzrkeqokpomkdb:Nbr2u-1yKKU01Go5bS9BxhM2aG@ec2-54-221-240-24.compute-1.amazonaws.com:5432/d5nd6olcvp8h0i');
client.connect();
var query = client.query('CREATE TABLE locations (lat VARCHAR(64), lon VARCHAR(64), date DATE)');
query.on('end', function() { client.end(); });