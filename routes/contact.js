var router = require('express').Router();



/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact',
						title: 'contact'
													});
});

module.exports = router;
