var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title1: 'Search off-flavors', 
  	title2: 'Insert off-flavor'	
													});
});





module.exports = router;
