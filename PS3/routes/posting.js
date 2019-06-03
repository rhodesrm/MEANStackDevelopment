const express = require('express');
const router = express.Router();
const request = require("request");

router.post('/', function(req, res, next) {
    res.render('posting', { postStr: 'hey now!', strLen: '8' });
});

router.get('/', function(req,res,next) {
    res.render('posting', { postStr: 'hey now!'});

})

module.exports = router;

















