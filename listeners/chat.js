'use strict';

exports.listen = function(socket){
	socket.on('message', function(data){
			console.log('message');
			socket.emit('message',data);
		});
};