var express = require('express');
var path = require('path');

var app = express();

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.get('/', function(req, res){
  res.render('index', { title: 'Home'})
});

app.listen(3000);


