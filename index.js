console.log(process.env.smoqToken);


var express = require('express');
var app = express(),
    bodyParser = require('body-parser');
var request = require('request');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('/*', function (req, res) {
    res.send('Smoq Bot! *');

    console.log('x');
});


app.get('/', function (req, res) {
    res.send('Smoq Bot!');
});

app.post('/webhook/:token', function (req, res) {
    if (process.env.smoqToken == req.params.token) {
        console.log('Yup');
        console.log(req.params);
        console.log(req.body);

        request.post('https://api.telegram.org/bot' + process.env.smoqToken +
            '/sendMessage', {
            chat_id: req.body.message.chat.id,
            text: req.body.message.text
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body) // Show the HTML for the Google homepage.
            }
        });

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

