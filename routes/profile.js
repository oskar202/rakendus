var async  = require('async')
var router = require('express').Router()

var entu   = require('../entu/entu')



// Show user own profile
router.get('/', function(req, res, next) {
    if(!res.authenticate()) return




module.exports = router