console.log(process.env.smoqToken);


var express = require('express');
var app = express(),
    bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('/*', function (req, res) {
    res.send('Smoq Bot! *');
});


app.get('/', function (req, res) {
    res.send('Smoq Bot!');
});

app.post('/:token', function (req, res)
{
    if (proces.env.smoqToken.equals(req.params.token)) {
        console.log('Yup');
        console.log(req.params);
        console.log(req.body);
    } else {
        console.log('Nope');
    }
    res.send();
});

var server = app.listen(process.env.smoqPort, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Smoq Bot listening at http://%s:%s', host, port);
});

