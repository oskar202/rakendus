var router = require('express').Router();

var entu = require('../entu/entu')




/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});





module.exports = router;
