var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello DANIEL MIAO from index.js in NODE.JS!');
});

var server = app.listen(3101, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
