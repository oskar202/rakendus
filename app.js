var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var random  = require('randomstring')
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
var stylus = require('stylus')
var nib = require('nib')

var app = express();


// serverist copytud
APP_PORT      		= process.env.PORT || 3000;
APP_ENTU_URL  		= process.env.ENTU_URL || 'https://nospel.entu.ee/api2'
APP_ENTU_USER 		= process.env.ENTU_USER
APP_ENTU_KEY  		= process.env.ENTU_KEY
APP_COOKIE_SECRET   = process.env.COOKIE_SECRET || random.generate(16)
APP_DEFAULT_LOCALE  = process.env.DEFAULT_LOCALE || 'et'


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cookie
app.use(cookieParser(APP_COOKIE_SECRET));

// set defaults for views
app.use(function(req, res, next) {
	res.authenticate = function() {
		if(!res.locals.user) {
			res.cookie('redirect_url', '/' + res.locals.path.split('/').slice(2).join('/'), {signed:true, maxAge:1000*60*60})
			res.redirect('/' + '/signin')
			return false
		} else {
			return true
		}
	}
	res.locals.showFeedback = true
	res.locals.path = req.path
	if(!req.signedCookies) next(null)
	if(req.signedCookies.auth_id && req.signedCookies.auth_token) {
		entu.getUser({
			auth_id: req.signedCookies.auth_id,
			auth_token: req.signedCookies.auth_token
		}, function(error, user) {
			if(user) {
				res.locals.user = {
					id: parseInt(req.signedCookies.auth_id, 10),
					token: req.signedCookies.auth_token,
					picture: op.get(user, 'picture'),
					lang: op.get(user, 'person.language.values.0.value', APP_DEFAULT_LOCALE)
				}
			} else {
				res.clearCookie('auth_id')
				res.clearCookie('auth_token')
			}
			next(null)
		})
	} else {
		next(null)
	}
})


//app.use(require('stylus-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', require('./routes/index'));
app.use('/signin', require('./routes/signin'));

//app.use('/about', require('./routes/about'));


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
