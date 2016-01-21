var router = require('express').Router();

var entu = require('../entu/entu')

router.get('/', function(req, res, next) {
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
