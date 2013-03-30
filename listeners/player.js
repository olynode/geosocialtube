'use strict';

var region = 'JP',
	youtube = require('youtube-feeds'),
	_videos = [];

exports.listen = function(io, socket){
	socket.on('region', function(data){
		region = data.region;
	});

	socket.on('play', function(data){
		io.sockets.emit('play', data);
	});


	var getVideos = function(callback){
		youtube.feeds.standard( region + "/most_popular", {time: 'today'}, function(err, videos){
			callback(videos.items);
		});
	};

	getVideos(function(videos){
		_videos = videos;
		io.sockets.emit('play', videos[0]);
	});

};

