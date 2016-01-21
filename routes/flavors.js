var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('flavors');


  //siia lehele tulemused
});



router.get('/search', function(req, res, next) {
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





module.exports = router;
