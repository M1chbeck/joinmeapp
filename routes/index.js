var express = require('express');
var firebase = require("firebase");
var router = express.Router();


var config = {
  apiKey: "AIzaSyDCtjCnnW7M1y2BV7AvySwYbUuvtCGSGFE",
  authDomain: "scaletest-c82d5.firebaseapp.com",
  databaseURL: "https://scaletest-c82d5.firebaseio.com"
};

firebase.initializeApp(config);

var rootRef = firebase.database().ref();

//connect to Firebase DB
/*firebase.intializeApp({
	apiKey: "AIzaSyDCtjCnnW7M1y2BV7AvySwYbUuvtCGSGFE",
    authDomain: "scaletest-c82d5.firebaseapp.com",
    databaseURL: "https://scaletest-c82d5.firebaseio.com",
    storageBucket: "scaletest-c82d5.appspot.com",
    messagingSenderId: "144393361209"
});
*/

/* GET home page. */
router.get('/', function(req, res, next) {
	rootRef.set({
		title: "Hello World!",
		author: "Firebase",
		joinevents: {
		city: "San Francisco",
		state: "California",
		zip: 94103,
		date: "21.06.2016",
		creator: "mike"
		}
	});
	res.render('index', { title: 'Data Saved' });
});

module.exports = router;
