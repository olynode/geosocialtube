/*jshint node:false */
/*globals define */
'use strict';

define(['jquery'], function($){
	
	var w = {};

	w.sayWoot = function(){
		$('body').append('<p>woot</p>');
		console.log('woot from woot module');
		
	};

	return w;
});