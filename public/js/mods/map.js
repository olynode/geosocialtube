/*jshint node:false */
/*globals define */
'use strict';

define(['jquery', 'mods/sockets'], function($, socket){
	var m = {};

	m.setup = function(){
		socket.on('play', m.play);
	};

	m.play = function(video){
		console.log(
			'map module received video:'
		);
		console.log(video);

	};

	return m;
});