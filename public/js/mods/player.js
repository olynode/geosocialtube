/*jshint node:false */
/*globals define */
'use strict';

define(['jquery', 'mods/sockets'], function($, socket){

	var p = {};

	p.setup = function(){
		socket.on('play', p.play);
	};

	p.play = function(video){
		$('.player iframe').attr('src', "http://www.youtube.com/embed/" + video.id);
		console.log(video);
	};
	return p;

});