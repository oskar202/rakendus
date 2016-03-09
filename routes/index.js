var router = require('express').Router();
var async = require('async')
var entu = require('../entu/entu')


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
})



/* Flavors page. */
router.get('/flavors', function(req, res, next) {
	entu.getEntities({
		definition: 'flavor',
		fullObject: true,
		query: req.query.quality + ' ' + req.query.category +' '+ req.query.retention
	}, function(error, flavors) {
		if(error) return next(error)

		res.render('flavors', {
			flavors: flavors
		})
	})
})



/* POST insert page. */
router.get('/insert', function(req, res, next) {	
	res.render('insert');

})


router.post('/:id', function(req, res, next){
	
	entu.add({
		parentEntityId: 48131,
		definition: 'flavor',
		properties: req.body
	},function(err,results){
		if(!err) res.redirect('')
	})
})

/* GET search page. */
router.get('/search', function(req, res, next) {
	res.render('search');
})


/* Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact',
						title: 'contact' });
})


/* About page. */
router.get('/about', function(req, res, next) {
	res.render('about', { title: 'Off flavours'});
})


module.exports = router;
