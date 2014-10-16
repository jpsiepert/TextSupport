'use-strict'
var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var port = 9696;
var Firebase = require('firebase');
var twilio = require('twilio')
var firebaseRef = new Firebase("https://text-support.firebaseio.com/numbers")
var client = new twilio.RestClient("AC3163b0572ee2a0368634e1f264b58c11", "f7f3c575d290b9aa5405018632adbe4d");

app.use(express.static(__dirname + "/public"));

app.use(bodyParser())

// console.log(firebaseRef)

app.post("/support/messages", function(req, res){
	client.messages.create({
		to: req.body.number,
		from: '+12087798137',
		body: req.body.text
	}, function(error, message){
			if(error){
				console.log(error);
				res.status(error.status).send(error.message)
			} else{
				res.status(200).send('Message successfully sent');
			}
	});

})

app.listen(port, function(){
	console.log("Support is listening on " + port)
});



