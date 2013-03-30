'use strict';

var region = 'JP',
	youtube = require('youtube-feeds'),
	currentIndex = 0,
	_videos = [];

exports.listen = function(io, socket){
	
	socket.on('region', function(data){
		region = data.region;
		currentIndex = 0;
		getVideos(onVideos);
	});

	socket.on('play', function(data){
		io.sockets.emit('play', data);
	});

	socket.on('next', function(data){
		io.sockets.emit('play', _videos[++currentIndex]);
	});


	var getVideos = function(callback){
		youtube.feeds.standard( region + "/most_popular", {time: 'today'}, function(err, videos){
			callback(videos.items);
		});
	};
	var onVideos = function(videos) {
		_videos = videos;
		io.sockets.emit('play', _videos[0]);
	};

	getVideos(onVideos);

};

