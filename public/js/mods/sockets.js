/*jshint node:false */
/*globals define, io, window */
'use strict';

define(['socket.io'], function(){

	var socket = io.connect(null, { transports: [
   'flashsocket',
   'htmlfile',
   'xhr-polling',
   'jsonp-polling'
  ]});
	return socket;

});