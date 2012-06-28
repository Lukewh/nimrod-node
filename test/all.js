var Nimrod = require('../lib/nimrod-node');

exports.create = function(test){
	test.expect(4);
	// Check instance is instance of nimrod
	test.ok(
		new Nimrod(__dirname+'/test.log') instanceof Nimrod,
		'Nimrod is an instance of Nimrod'
	);
	// Check a logFile is provided
	test.throws(
		function(){
			new Nimrod().file;
		},
		Error,
		'Nimrod doesn\'t have a logfile to work with'
	);
	
	// Check a passed logFile can be written to
	test.throws(
		function(){
			new Nimrod(__dirname);
		},
		Error,
		'Nimrod shouldn\'t be able to write to this path, as it\'s a folder'
	);
	
	// Check passing a log file works
	var n = new Nimrod(__dirname+'/test.log');
	test.strictEqual(
		n.file,
		__dirname+'/test.log',
		'Nimrod has a logfile to work with'
	);
	
	test.done();
};

exports.logAlert = function(test){
	test.expect(9);
	
	var n = new Nimrod(__dirname+'/test.log');
	
	// Test logAlerts
		// Test passing no arguments hrows error
	test.throws(
		function(){
			n.logAlert(null);
		},
		Error,
		'All arguments missing'
	);
	
		// Passing the name throws an error
	test.throws(
		function(){
			n.logAlert('test');
		},
		Error,
		'Value argument missing'
	);
	
		// Passing the value throws an error
	test.throws(
		function(){
			n.logAlert(null, 0);
		},
		Error,
		'Name argument missing'
	);
	
		// Passing a number throws an error
	test.throws(
		function(){
			n.logAlert(1, 0);
		},
		Error,
		'Passing a number for the name should throw an error'
	);
	
		// Passing an array for the name throws an error
	test.throws(
		function(){
			n.logAlert(['green', 2], 0);
		},
		Error,
		'Passing an array for the name should throw an error'
	);
	
		// Passing an array for the value throws an error
	test.throws(
		function(){
			n.logAlert('test', ['green', 2]);
		},
		Error,
		'Passing an array for the value should throw an error'
	);
	
		// Passing an object for the name throws an error
	test.throws(
		function(){
			n.logAlert({green: 2}, 0);
		},
		Error,
		'Passing an object for the name should throw an error'
	);
	
	// Passing an object for the value throws an error
	test.throws(
		function(){
			n.logAlert('test', {green: 2});
		},
		Error,
		'Passing an object for the value should throw an error'
	);
	
		// Passing a string for the name and value doesn't throw an error
	test.doesNotThrow(
		function(){
			n.logAlert('test', '0');
		},
		Error,
		'Passing a string shouldn\'t throw an error'
	);
	
		// Test passing all arguments returns true
	test.done();
};

exports.logCounter = function(test){
	test.expect(9);
	
	var n = new Nimrod(__dirname+'/test.log');
	
	// Test logAlerts
		// Test passing no arguments hrows error
	test.throws(
		function(){
			n.logCounter(null);
		},
		Error,
		'All arguments missing'
	);
	
		// Passing the name throws an error
	test.throws(
		function(){
			n.logCounter('test');
		},
		Error,
		'Value argument missing'
	);
	
		// Passing the value throws an error
	test.throws(
		function(){
			n.logCounter(null, 0);
		},
		Error,
		'Name argument missing'
	);
	
		// Passing a number throws an error
	test.throws(
		function(){
			n.logCounter(1, 0);
		},
		Error,
		'Passing a number for the name should throw an error'
	);
	
		// Passing an array for the name throws an error
	test.throws(
		function(){
			n.logCounter(['green', 2], 0);
		},
		Error,
		'Passing an array for the name should throw an error'
	);
	
		// Passing an array for the value throws an error
	test.throws(
		function(){
			n.logCounter('test', ['green', 2]);
		},
		Error,
		'Passing an array for the value should throw an error'
	);
	
		// Passing an object for the name throws an error
	test.throws(
		function(){
			n.logCounter({green: 2}, 0);
		},
		Error,
		'Passing an object for the name should throw an error'
	);
	
	// Passing an object for the value throws an error
	test.throws(
		function(){
			n.logCounter('test', {green: 2});
		},
		Error,
		'Passing an object for the value should throw an error'
	);
	
		// Passing a string for the name and value doesn't throw an error
	test.doesNotThrow(
		function(){
			n.logCounter('test', '0');
		},
		Error,
		'Passing a string shouldn\'t throw an error'
	);
	
		// Test passing all arguments returns true
	test.done();
};

exports.logGauge = function(test){
	test.expect(9);
	
	var n = new Nimrod(__dirname+'/test.log');
	
	// Test logAlerts
		// Test passing no arguments hrows error
	test.throws(
		function(){
			n.logGauge(null);
		},
		Error,
		'All arguments missing'
	);
	
		// Passing the name throws an error
	test.throws(
		function(){
			n.logGauge('test');
		},
		Error,
		'Value argument missing'
	);
	
		// Passing the value throws an error
	test.throws(
		function(){
			n.logGauge(null, 0);
		},
		Error,
		'Name argument missing'
	);
	
		// Passing a number throws an error
	test.throws(
		function(){
			n.logGauge(1, 0);
		},
		Error,
		'Passing a number for the name should throw an error'
	);
	
		// Passing an array for the name throws an error
	test.throws(
		function(){
			n.logGauge(['green', 2], 0);
		},
		Error,
		'Passing an array for the name should throw an error'
	);
	
		// Passing an array for the value throws an error
	test.throws(
		function(){
			n.logGauge('test', ['green', 2]);
		},
		Error,
		'Passing an array for the value should throw an error'
	);
	
		// Passing an object for the name throws an error
	test.throws(
		function(){
			n.logGauge({green: 2}, 0);
		},
		Error,
		'Passing an object for the name should throw an error'
	);
	
	// Passing an object for the value throws an error
	test.throws(
		function(){
			n.logGauge('test', {green: 2});
		},
		Error,
		'Passing an object for the value should throw an error'
	);
	
		// Passing a string for the name and value doesn't throw an error
	test.doesNotThrow(
		function(){
			n.logGauge('test', '0');
		},
		Error,
		'Passing a string shouldn\'t throw an error'
	);
	
		// Test passing all arguments returns true
	test.done();
};

exports.startTimer = function(test){
	test.expect(10);
	
	var n = new Nimrod(__dirname+'/test.log');
	
	// Test logAlerts
		// Test passing no arguments throws error
	test.throws(
		function(){
			n.startTimer(null);
		},
		Error,
		'Name argument missing'
	);
	
		// Passing a number throws an error
	test.throws(
		function(){
			n.startTimer(1);
		},
		Error,
		'Passing a number for the name should throw an error'
	);
	
		// Passing an array for the name throws an error
	test.throws(
		function(){
			n.startTimer(['green', 2]);
		},
		Error,
		'Passing an array for the name should throw an error'
	);
	
		// Passing an object for the name throws an error
	test.throws(
		function(){
			n.startTimer({green: 2});
		},
		Error,
		'Passing an object for the name should throw an error'
	);
	
		// Passing a string for the name doesn't throw an error
	test.doesNotThrow(
		function(){
			n.startTimer('test');
		},
		Error,
		'Passing a string shouldn\'t throw an error'
	);
	
		// Passing a string for tags doesn't throw an error
	test.doesNotThrow(
		function(){
			n.startTimer('test2', 'test:timer');
		},
		Error,
		'Passing a string for tags should not throw an error'
	);
		
		// Passing an array of tags doesn't throw an error
	test.doesNotThrow(
		function(){
			n.startTimer('test3', ['test:timer','timer:test2']);
		},
		Error,
		'Passing an array of tags should not throw an error'
	);
	
		// Passing an object of tags should throw an error
	test.throws(
		function(){
			n.startTimer('test3', {test: 'timer', timer: 'test2'});
		},
		Error,
		'Passing an array of tags should throw an error'
	);
	
		// Starting a timer with the same name as one already running should throw an error
	test.throws(
		function(){
			n.startTimer('test2');
		},
		Error,
		'Starting a timer with a name already in use should throw an error'
	);	
	
		// Test end, ends all non-stopped timers
	test.doesNotThrow(
		function(){
			n.end();
		},
		Error,
		'An error should not be thrown when ending all timers'
	);
	
		// Test passing all arguments returns true
	test.done();
};

exports.stopTimer = function(test){
	test.expect(6);
	
	var n = new Nimrod(__dirname+'/test.log');
	n.startTimer('test2');
		
	// Test logAlerts
		// Test passing no arguments throws error
	test.throws(
		function(){
			n.stopTimer(null);
		},
		Error,
		'Name argument missing'
	);
	
		// Passing a number throws an error
	test.throws(
		function(){
			n.stopTimer(1);
		},
		Error,
		'Passing a number for the name should throw an error'
	);
	
		// Passing an array for the name throws an error
	test.throws(
		function(){
			n.stopTimer(['green', 2]);
		},
		Error,
		'Passing an array for the name should throw an error'
	);
	
		// Passing an object for the name throws an error
	test.throws(
		function(){
			n.stopTimer({green: 2});
		},
		Error,
		'Passing an object for the name should throw an error'
	);
	
		// Passing the name that hasn't been started throw an error
	test.throws(
		function(){
			n.stopTimer('testing');
		},
		Error,
		'Passing the name of a timer that is unstarted should throw an error'
	);
	
		// Passing a string for the name doesn't throw an error
	test.doesNotThrow(
		function(){
			n.stopTimer('test2');
		},
		Error,
		'Passing a string shouldn\'t throw an error'
	);
	
		// Test passing all arguments returns true
	test.done();
};