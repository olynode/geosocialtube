/*globals desc, task, jake, fail, complete, directory */
(function() {
	'use strict';

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



	function sh(command, callback) {
		var stdout = '';
		var processOptions = { printStdout:true, printStderr:true };
		var process = jake.createExec(command, processOptions);
		
		process.on('stdout', function(chunk){
			stdout += chunk;
		});
		
		process.on('cmdEnd', function(){
			callback(stdout);
		});
		
		process.run();
	}

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