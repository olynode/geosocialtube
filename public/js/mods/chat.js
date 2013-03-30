/*jshint node:false */
/*globals define, prompt */
'use strict';

define(['jquery', 'mods/sockets'], function($, socket){

	var p = {};
	var user = { name: 'anonymous' };

	p.setup = function(){
		socket.on('user-connected', p.userConnected);
		socket.on('message', p.message);
		$('.chat input[type="submit"]').on('click', p.submitClick);
	};

	p.submitClick = function(){
		if(user.name === 'anonymous'){
			user = { name: prompt('what is your name?')};
			socket.emit('user-connected', user);
		}

		socket.emit('message', {
			user: user,
			message: $('.chat input[type="text"]').val()
		});
		$('.chat input[type="text"]').val('');
	};

	p.userConnected = function(user){
		$('.chat ul.messages').append('<li>user connected: ' + user.name + '</li>');
	};

	p.message = function(message){
		$('.chat ul.messages').append('<li>' + message.user.name +': ' + message.message + '</li>');
	};
	return p;

});