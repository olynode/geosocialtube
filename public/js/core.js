/*jshint node:false */
/*globals require */

'use strict';

require.config({
    baseUrl: '/js/',
    paths:{
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min',
        'socket.io': '../socket.io/socket.io',
        'bootstrap': 'libs/bootstrap.min'
    }
});

require(['jquery', 'mods/player', 'mods/chat', 'bootstrap'], function($, player, chat){
    player.setup();
    chat.setup();
});