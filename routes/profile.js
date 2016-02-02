var async  = require('async')
var router = require('express').Router()

var entu   = require('../entu/entu')



// Show user own profile
router.get('/', function(req, res, next) {
	res.render('profile')
})


module.exports = router