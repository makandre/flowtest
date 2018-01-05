// @flow

const express = require('express');
const server = express();

server.get('/', function(req, res) {
    res.send('Hello World!');
});

server.listen(3000, function() {
    console.log('Listening on port 3000');
});
