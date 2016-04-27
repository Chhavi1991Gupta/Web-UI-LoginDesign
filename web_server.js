var http = require('http');
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var db = require('./db');
var crypto = require('crypto');



app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());

app.post('/', function (req, res) {
    console.log(req.body);
    var registration = req.body;
    
    
    db.dmlQry('insert into registration set ?',registration, function(error,result){
        if(error){
            console.log("Error" + error);
            res.writeHead(500, {'Content-Type': "application/json"});
            res.end(JSON.stringify({response:error}));
        }
        else{
             res.writeHead(200, {'Content-Type': "application/json"});
             res.end(JSON.stringify({response:'Saved to MySQL'}));
        }          
    });
})

function getMD5Sum(d)
{
    var md5sum = crypto.createHash('md5');
    return(md5sum.update(d).digest('hex'));
}
app.listen(8000)
