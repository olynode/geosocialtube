'use strict';

var express = require('express'),
   sockets = require('socket.io'),
   routes = require('./routes'),
   listeners = require('./listeners'),
   http = require('http'),
   path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express['static'](path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

var server = http.createServer(app);

var io = sockets.listen(server);
io.set('transports', [
   'flashsocket',
   'htmlfile',
   'xhr-polling',
   'jsonp-polling'
  ]);
listeners.listen(io);

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
