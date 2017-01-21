var express = require('express');
var body_parser = require('body-parser');
var app = express();
app.use(body_parser.urlencoded());
app.use(body_parser.json());

app.get('/request/print', function (req, res) {
    var code = req.query.code;
    console.log("I have receive "+code);
    res.end(code);
});

var server = app.listen(8081, function () {
    console.log("Server has been started at port 8081");
})
