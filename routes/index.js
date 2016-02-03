var router = require('express').Router();
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
