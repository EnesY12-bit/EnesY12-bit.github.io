var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send("Hallo"+req.params.fname+"!");
})

app.listen(3000);