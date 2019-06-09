const express = require('express');
const router = express.Router();
const request = require('request-promise-lite');
const async = require('async');

let weatherKey = require('../tsconfig').env.weatherKey;
let weatherID = require('../tsconfig').env.weatherID;
let zipCode = '02215';

let getWeather = function (zipCode) {
    return new Promise(function (resolve, reject) {
        request.get("http://api.weatherunlocked.com/api/current/us."+zipCode+"?app_id="+weatherID+"&app_key="+weatherKey, {json: true})
            .then(function (response) {
                let weatherDescription = response.wx_desc;
                resolve(weatherDescription);
            })
            .catch(function (err) {
                console.log(err);
                reject(err);
            });
    });
};

router.get('/', function(req, res, next) {
    var descript;
    getWeather('02215')
        .then(function (body) {
            res.render('weather', { title: 'Weather Viewer', descript: body });
        })
        .catch(function (err) {
            console.log(err);
        });
});


module.exports = router;