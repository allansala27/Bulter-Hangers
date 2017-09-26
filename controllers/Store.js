var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/hangers', function(req, res) {
    res.render('HangersStore');
});

router.get('/other', function(req, res) {
	res.render('OtherProducts');
});


module.exports = router;
