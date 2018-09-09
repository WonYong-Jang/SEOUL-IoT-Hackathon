const express = require('express');
var router = express.Router();
const fs = require('fs');

var app = express();
var sendDetections;

app.set("view engine", "ejs");
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
//app.use(express.static('public'));
app.use('/public', express.static('public'));

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
