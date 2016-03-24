var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index.js');
var users = require('./routes/user.js');

var app = express();

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

/**
 * Development Settings
 */

if ('development' == app.get('env')) {
  app.use(express.static(path.join(__dirname, '../.tmp')));
  app.use(express.static(path.join(__dirname, '../app')));
  app.use('/bower_components',  express.static(__dirname + '/bower_components'));
// This is the new way to handle errors in Express 4. not errorHandler().
// For more about error-first best practices see http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/
  app.use(function(err, req, res, next){
    console.error(err.stack);
    res.send(500, 'Something broke!');
  });

}

/**
 * Production Settings
 */
if('production' == app.get('env')) {
  app.use(express.static(path.join(__dirname, '/dist')));
}

/* Add this to fire the server */
var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});

module.exports = app;
