var router = require('express').Router();



/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('about.jade', { title: 'Off flavours',
						age: '2'
													});
});



module.exports = router;
