/*globals desc, task, jake, fail, complete, directory */
(function() {
	'use strict';

	var printOptions = { printStdout: true, printStderr: true };

	desc('build and test');
	task('default',['lint', 'test']);

	desc('lint everthing');
	task('lint', [], function(){
		var lint = require('jake-jshint');
		var options = nodeLintOptions();
		var files = new jake.FileList();

		files.include('Jakefile');
		files.include('**/*.js');
		files.exclude('node_modules');
		files.exclude('js/libs');

		if(!lint.validateFileList(files.toArray(), options, {}))
			fail('lint failed');
	});

	desc('test everything');
	task('test',[], function(){
		var reporter  = require('nodeunit').reporters['default'];
		var files = new jake.FileList();

		files.include('**/_*.js');
		reporter.run(files.toArray(), null, function(failures){
			if(failures) fail('tests failed');
			complete();
		});
	}, { async: true });

	desc('deploy to azure');
	task('deploy', ['default'], { async: true }, function(){
		var command = 'git push azure master';
        jake.exec(command, complete, printOptions);
	});

	desc('push to github');
	task('github', ['default'], { async: true }, function(){
		var command = 'git push origin master';
        jake.exec(command, complete, printOptions);
	});

	desc('run the server');
	task('server', ['default'], function(){
		var command = 'node app.js';
		jake.exec(command, complete, printOptions);
	});

	function nodeLintOptions() {
		return {
			bitwise: true,
			curly: false,
			eqeqeq: true,
			forin: true,
			immed: true,
			latedef: true,
			newcap: true,
			noarg: true,
			noempty: true,
			nonew: true,
			regexp: true,
			undef: true,
			strict: true,
			trailing: true,
			node: true
		};

	}

}());