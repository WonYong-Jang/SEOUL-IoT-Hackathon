const express = require('express');
var request = require("request");
var util = require("util");
var eventEmitter = require("events").EventEmitter;

var app = express();

var options = 
{ method: 'GET',
  url: 'https://api.sandbox.thingplus.net/v2/gateways/0165a56aea6900000000000100100381/sensors/temperature-0165a56aea6900000000000100100381-0/series',
  headers: 
  { 
     Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIyODIiLCJjbGllbnRJZCI6ImhhY2thdGhvbiIsImlhdCI6MTUzNjA3OTU4MCwiZXhwIjoxNTM3Mzc1NTgwfQ.xrJyxDSHZzobK7lpp7nrp-iTl6ld3o4rSydA2meis4I' 
  }};

app.set("view engine", "ejs");
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
//app.use(express.static('public'));
//app.use('/public', express.static('public'));

/*
function TemObj(){
  this.on("fire", function(){
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });
  });
}

util.inherits(TemObj, eventEmitter); // 객체가 이벤트 emitter 사용하기 위해 상속
var obj = new TemObj();
var fireTime = setInterval(function(){
  console.log("fire event after 3second");
  obj.emit("fire");
}, 3000);
*/

app.get('/', function(req,res) {
  res.send('hello');
});

app.get('/dashboard', function(req, res) {
  res.render('dashboard');
});

app.use('/roadPage', function(req, res) {
  res.render('roadPage');
});

app.use('/roadBoard', function(req, res) {
  res.render('roadBoard');
});

app.use('/roadMap', function(req, res) {
  res.render('roadMap');
});


app.listen(3007, function() {
  console.log('Example app listening on port 3007!');
  console.log('http://localhost:3007/');
});
