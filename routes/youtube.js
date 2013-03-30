'use strict';

/*
 * fetch and process youtube api.
 */
var youtube = require('youtube-feeds');


var getVideo = function(callback){
youtube.feeds.standard("JP/most_popular", {time: 'today'}, function(err, videos){
  callback( videos.items[0]);
});

};

exports.getVideos = function(req, res){
    getVideo(function(video){
      res.json(video);
    });
 };