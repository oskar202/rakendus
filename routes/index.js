var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title1: 'Search for off-flavors', 
  	title2: 'Insert off-flavor',
						age: '2'	
													});
});

module.exports = router;
