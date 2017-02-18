var express = require('express');
var body_parser = require('body-parser');
var paymentFactory = require('./payment');

var app = express();
var payment = paymentFactory.create();

app.use(body_parser.urlencoded());
app.use(body_parser.json());

app.get('/request/print', function (req, res) {
    var code = req.query.code;
    console.log("I have receive "+code);
    res.end(code);
});

app.post('/pay', function(req, res){
    var fromId = req.body.fromId;
    var toId = req.body.toId;
    var amount = req.body.amount;
    var result = payment.payTo(fromId, toId, amount);
    console.log(fromId+"-"+amount+"->"+toId+"->"+result);
    res.end(result+"");
});

app.post('/receipt', function(req, res){
    var id = req.body.id;
    var result = payment.getReceipt(id);
    console.log(id+"->"+result);
    res.end(result+"");
});

app.post('/register', function(req, res){
    var id = req.body.id;
    var result =  payment.register(id);
    console.log(id+"->"+result);
    res.end(result+"");
});
app.post('/put', function(req, res){
    var id = req.body.id;
    var amount = req.body.amount;
    var result = payment.putMoney(id, amount);
    console.log(id+"+->"+amount);
    res.end(result+"");
});
var server = app.listen(8081, function () {
    console.log("Server has been started at port 8081");
})
