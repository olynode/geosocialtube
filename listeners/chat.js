'use strict';

exports.listen = function(io, socket){
	
	socket.on('user-connected', function(data){
		io.sockets.emit('user-connected', data);
	});

	socket.on('message', function(data){
			io.sockets.emit('message',data);
	});
};