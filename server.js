var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(req,res){
  console.log(req);
  res.send("Hello World");
});

var port = process.env.PORT || 808;
app.listen(port, function(){
  console.log("Listening on " + port );
});
