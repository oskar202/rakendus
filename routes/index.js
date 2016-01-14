var express = require('express');
var router = express.Router();

var entu = require('./entu/entu')


/* GET home page. */
router.get('/', function(req, res, next) {
  entu.getEntities({
  	definition: 'index',
  	fullObject: true
  },
  res.render('index', {
  	index : index
  	})
	
});





module.exports = router;
