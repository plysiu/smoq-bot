console.log(process.env.smoqToken);


var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.send('Smoq Bot!');
});

var server = app.listen(process.env.smoqPort, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Smoq Bot listening at http://%s:%s', host, port);
});