/*jshint node:false */
/*globals define */
'use strict';

define(['jquery', 'mods/sockets'], function($, sockets){

	var p = {};

	p.setup = function(){
		sockets.on('play', p.play);
	};

	p.play = function(video){
		console.log(video);
	};
	return p;

});