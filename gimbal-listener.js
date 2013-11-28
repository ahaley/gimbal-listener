var express = require('express');
var _ = require('underscore');
var config = require('./config');

var app = express();
app.use(express.bodyParser());

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/json');
    res.end(JSON.stringify(_.keys(config)));
});

app.post('/', function (req, res) {
    _.each(config, function (value, key, list) {
        if (req.body.hasOwnProperty(key)) {
            console.log(key + ' = ' + req.body[key]);
        }
        res.end(JSON.stringify({"message": "accepted" }));
    });
});

console.log('listening on :1988');
app.listen(1988);
