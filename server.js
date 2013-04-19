var express = require("express");
var app = express();

app.configure(function(){
  app.use(express.logger());
  app.use(express.bodyParser());
});

app.get('/', function(req,res){
  console.log(req);
  res.send("Hello World");
});

app.post('/', function(req,res){
  console.log("POST to SERVER");
  console.log(req.body);
  res.send("ok");
});
var port = process.env.PORT || 8000;
app.listen(port, function(){
  console.log("Listening on " + port );
});
