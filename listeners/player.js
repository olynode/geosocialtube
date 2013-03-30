'use strict';

exports.listen = function(socket){
	socket.on('play', function(data){
			console.log('play');
			socket.emit('play', data);
		});
};