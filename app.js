var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
var stylus = require('stylus')
var nib = require('nib')

var app = express();


// serverist copytud
APP_PORT      = process.env.PORT || 3000;
APP_ENTU_URL  = process.env.ENTU_URL || 'https://nospel.entu.ee/api2'
APP_ENTU_USER = process.env.ENTU_USER
APP_ENTU_KEY  = process.env.ENTU_KEY


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(require('stylus-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', require('./routes/index'));
app.use('/about', require('./routes/about'));
app.use('/contact', require('./routes/contact'));
app.use('/flavors', require('./routes/flavors'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});


//serverist copytud
app.listen(APP_PORT, function() {
  console.log('Our app is running on http://localhost:' + APP_PORT);
});
