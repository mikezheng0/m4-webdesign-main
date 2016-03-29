var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

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



// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://m4.dev.mailer.dummy@gmail.com:4NUZ,aR=)>IAwzq@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
  from: '"M4sitemailer" <m4.dev.mailer.dummy@gmail.com>', // sender address
  to: 'info@m4webdev.com', // list of receivers
  subject: 'New Request', // Subject line
  text: 'Hello world', // plaintext body
  html: '<b>Hello world </b>' // html body
};

app.post("/", function(req, res){
  console.log('Message sent: '+ req.body.name);
  res.end("It worked! from nodejs");
  if(req.body.name && req.body.email && req.body.message && req.body.)
  var mailOptions = {
    from: `"${req.body.name}" <${req.body.email}>`, // sender address
    to: 'info@m4webdev.com', // list of receivers
    subject: 'New Request', // Subject line
    text: `Name: ${req.body.name}\n Email:${req.body.email}\n Phone Number: ${req.body.phone}\n Organization: ${req.body.organization}\n Message: ${req.body.message}`, // plaintext body
    html: `<p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Phone Number: ${req.body.phone}</p><p>Organization: ${req.body.organization}</p><p>Message: ${req.body.message}</p>` // html body
  };
  transporter.sendMail(mailOptions, function(error, info){
  if(error){
    return console.log(error);
  }
  console.log('Message sent: ' + info.response);
});
});
// send mail with defined transport object
//transporter.sendMail(mailOptions, function(error, info){
//  if(error){
//    return console.log(error);
//  }
//  console.log('Message sent: ' + info.response);
//});

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
