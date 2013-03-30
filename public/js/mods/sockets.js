/*jshint node:false */
/*globals define, io, window */
'use strict';

define(['socket.io'], function(){

	var socket = io.connect(window.href);
	return socket;

});