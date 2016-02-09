var router = require('express').Router();
var async = require('async')
var entu = require('../entu/entu')


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
})



/* Flavors page. */
router.get('/flavors', function(req, res, next) {
	async.parallel({
		flavors: function(callback) {
			entu.getEntities({
				definition: 'flavor',
				fullObject: true,
				query: req.query.quality
			}, callback)
		},
		retentionindex: function(callback) {
			entu.getEntities({
				definition: 'retention-index',
				fullObject: true,
				query: req.query.retention
			}, callback)
		},
		flavorincident: function(callback) {
			entu.getEntities({
				definition: 'flavor-incident',
				fullObject: true,
				query: req.query.category

			}, callback)
		},
	},
		function(err, results) {
			if(err) return next(err)

			res.render('flavors',{
				flavors: results.flavors,
				retentionindex: results.retentionindex,
				flavorincident: results.flavorincident
			})
	})
})






/* GET insert page. */
router.get('/insert', function(req, res, next) {
	res.render('insert');
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
