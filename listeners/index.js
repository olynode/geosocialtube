'use strict';

var player = require('./player'),
	chat = require('./chat');

exports.listen = function(io){
	io.sockets.on('connection', function (socket) {
		player.listen(io, socket);
		chat.listen(io, socket);
	});
};