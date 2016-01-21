var router = require('express').Router();



/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact',
						age: '2'
													});
});

module.exports = router;
