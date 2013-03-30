'use strict';

exports.listen = function(socket){
	
	socket.on('user-connected', function(user){
		socket.emit('user-connected', user);
	});

	socket.on('message', function(data){
			socket.emit('message',data);
	});
};