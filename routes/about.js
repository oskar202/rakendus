var express = require('express');
var router = express.Router();




/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Off flavours', 
						age: '2'	
													});
});

module.exports = router;
