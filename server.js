/* Module dependencies */
var express = require('express');

/* App bootstrapping */
var app = express();

var server = app.listen(1229, function() {
  console.log('Listening on port %d', server.address().port);
});