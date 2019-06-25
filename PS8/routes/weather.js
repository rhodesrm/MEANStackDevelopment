const express = require('express');
const router = express.Router();
const request = require('request-promise-lite');
const async = require('async');
const db = require('../mongo/mongo');
const http = require('http');


let weatherKey = require('../tsconfig').env.weatherKey;
let weatherID = require('../tsconfig').env.weatherID;
let musicKey = require('../tsconfig').env.musicKey;
let playlistWeather = '';


// to use DB, connect to server
db.connect((err, client) => {
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});

router.get('/', (req, res, next) => {
    let mongo = db.getDB();
    mongo.collection('weatherInfo').findOne( {zip: zipCode},
        (err, response) => {
            if(response != null)
            {
                playlistWeather = JSON.stringify(response.weatherDes);
                //res.render('weather', {title: 'Weather Viewer', weather: JSON.stringify(response.weatherDes), zip: zipCode, cm: "This data was taken from DB"});
            }
            else
            {
                getWeather(zipCode)
                    .then( function (resp) {
                        mongo.collection('weatherInfo').insertOne( {zip: zipCode, weatherDes: resp }),
                            playlistWeather = resp;
                        //res.render('weather', {title: 'Weather Viewer', weather: resp, zip: zipCode, cm: "This data was taken from API call"})
                    } )
                    .catch( function (err) {
                        res.send("there was an error in else block of get method")
                    });
            } // end of else
            getMusic(playlistWeather)
                .then( (data) => res.send(JSON.stringify(data)))
        });
}); // end of get


router.post('/', (req, res, next) => {
    let zipCode = req.body.zip;
    let mongo = db.getDB();
    mongo.collection('weatherInfo').findOne( {zip: zipCode},
        (err, response) => {
            if(response != null)
            {
                //res.render('weather', {title: 'Weather Viewer', weather: JSON.stringify(response.weatherDes), zip: zipCode, cm: "This data was taken from DB"});
            }
            else
            {
                getWeather(zipCode)
                    .then( function (resp) {
                        mongo.collection('weatherInfo').insertOne( {zip: zipCode, weatherDes: resp }),
                        //res.render('weather', {title: 'Weather Viewer', weather: resp, zip: zipCode, cm: "This data was taken from API call"})
                    } )
                    .catch( function (err) {
                        res.send("there was an error in else block of post method")
                    });
            }
            getMusic(playlistWeather)
                .then( (data) => res.send(JSON.stringify(data)))
        });
}); // end of post


// function that calls weather API to get weather description for specific zip code
let getWeather = function (zipCode) {
    return new Promise(function (resolve, reject) {
        request.get("http://api.weatherunlocked.com/api/current/us."+zipCode+"?app_id="+weatherID+"&app_key="+weatherKey, {json: true})
            .then(function (response) {
                let weatherDescription = response.wx_desc;
                resolve(weatherDescription);
            })
            .catch(function (err) {
                console.log("there was an error in getWeather");
                reject(err);
            });
    });
};

// lastFM search for music reflecting the weather:
let getMusic = function (playlistWeather) {
    return new Promise( function (resolve, reject) {
        request.get("http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=" + playlistWeather + "&api_key=" + musicKey + "&format=json")
            .then(function (response) {
                resolve(response);
            })
            .catch(function (err) {
                console.log("there was an error in getMusic");
                reject(err);
            });
    })

}

module.exports = router;
