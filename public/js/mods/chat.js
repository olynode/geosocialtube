/*jshint node:false */
/*globals define */
'use strict';

define(['jquery', 'mods/sockets'], function($, socket){

	var p = {};

	p.setup = function(){
		socket.on('message', p.message);
	};

	p.message = function(message){
		console.log(message);
	};
	return p;

});