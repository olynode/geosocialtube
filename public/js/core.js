/*jshint node:false */
/*globals require */

'use strict';

require.config({
    baseUrl: '/js/',
    paths:{
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min',
        'bootstrap': "libs/bootstrap.min"
    }
});

require(['jquery', 'mods/player', 'bootstrap'], function($, player){
    player.setup();
});