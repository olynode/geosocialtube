/*jshint node:false */
/*globals define */
'use strict';

define(['jquery', 'mods/sockets'], function($, socket){

	var p = {};

	p.setup = function(){
		socket.on('play', p.play);
	};

	p.play = function(video){
		console.log(video);
	};
	return p;

});