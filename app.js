/* Module dependencies */

var express        = require('express');
var path           = require('path');
var favicon        = require('static-favicon');
var logger         = require('morgan');
var cookieParser   = require('cookie-parser');
var bodyParser     = require('body-parser');

/* App bootstrapping */

var routes = require('./app/controllers/index');

var port = process.env.PORT || 1229;

var app = express();

var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});

/* View engine */

app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');

  err.status = 404;

  next(err);
});

/* Error handlers */

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
