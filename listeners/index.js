'use strict';

var player = require('./player'),
	chat = require('./chat');

exports.listen = function(io){
	io.sockets.on('connection', function (socket) {
		player.listen(socket);
		chat.listen(socket);
	});
};