/*jshint node:false */
/*globals define, io, window */
'use strict';

define(['socket.io'], function(){

	var socket = io.connect();
	return socket;

});