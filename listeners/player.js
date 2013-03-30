'use strict';

exports.listen = function(io, socket){
	socket.on('play', function(data){
			io.sockets.emit('play', data);
		});
};