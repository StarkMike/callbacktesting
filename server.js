var express = require("express");
var app = express();
var http = require('http');
var server = http.createServer(app)
var io = require('socket.io').listen(server);

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.logger());
  app.use(express.bodyParser());
});

io.configure(function(){
  io.set("transports", ["xhr-polling"]);
  io.set("polling duration", 10);
});

app.get('/', function(req,res){
  res.render('index');
});

app.post('/', function(req,res){
  //POST data to any listeners
  io.sockets.in('callbackroom').emit('message', JSON.stringify(req.body));
  res.send("ok");
});

var port = process.env.PORT || 8000;
server.listen(port, function(){
  console.log("Listening on " + port );
});

//Socket events
io.on('connection', function(socket){
  socket.join('callbackroom');
});
