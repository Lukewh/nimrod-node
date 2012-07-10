var fs = require('fs');

process.on('uncaughtException', function(err){
    console.log(err); 
});

/**
 * 
 */
var NimrodLogger = function(logFile){
    this.file = logFile;
    this.metric = null;
    this.id = null;
    this.timers = {};
    
    this.init();
};

/**
 * Do some basic checks
 */
NimrodLogger.prototype.init = function(){
    var n = this,
        file = null;
    
    // Is there a logFile?
    if(!n.file){
    	console.log('No log file defined');
        throw new Error('No log file defined');
    }
    
    // Can the logFile be written to?
    try {
        file = fs.openSync(n.file, 'a+', 0644);
        fs.closeSync(file);
    } catch(err){
        // Error catch
        console.log(err[0].Error);
        throw new Error(err[0].Error);
    }
};

/**
 * Create Alert
 */
NimrodLogger.prototype.logAlert = function(name, value, tags){
    var n = this,
    	metric = 'alert';
    
    if(!name){
    	console.log('No name defined');
	    throw new Error('No name defined');
    }
    name = normalizeName(name);
    
    n.log(metric, name, value, tags);
};

/**
 * Create Counter
 */
NimrodLogger.prototype.logCounter = function(name, value, tags){
    var n = this,
    	metric = 'counter';
    
    if(!name){
    	console.log('No name defined');
	    throw new Error('No name defined');
    }
    name = normalizeName(name);

    n.log(metric, name, value, tags);
};

/**
 * Create Gauge
 */
NimrodLogger.prototype.logGauge = function(name, value, tags){
    var n = this,
    	metric = 'gauge';
    
    if(!name){
    	console.log('No name defined');
	    throw new Error('No name defined');
    }
    name = normalizeName(name);
    
    n.log(metric, name, value, tags);
};

/**
 * Start Timer
 */
NimrodLogger.prototype.startTimer = function(name, tags){
    var n = this,
    	metric = 'timer';
    
    if(!name){
    	console.log('No name defined');
	    throw new Error('No name defined');
    }
    name = normalizeName(name);
    
    if(n.timers[name] && n.timers[name] === true){
	    console.log('A timer with that name has already been started');
	    throw new Error('A timer with that name has already been started');
    }
    n.timers[name] = true;
    
    n.log(metric, name, 'start', tags);
};

/**
 *	Stop Timer
 */
NimrodLogger.prototype.stopTimer = function(name){
    var n = this,
    	metric = 'timer';
    
    if(!name){
    	console.log('No name defined');
	    throw new Error('No name defined');
    }
    name = normalizeName(name);
    
    if(!n.timers[name]){
    	console.log(name+' timer doesn\'t exit');
	    throw new Error(name+' timer doesn\'t exist');
    }
    
    n.timers[name] = false;
    
    n.log(metric, name, 'stop', null);
};

/**
 *	Log
 */
NimrodLogger.prototype.log = function(metric, name, value, tags){
	var n = this,
		str = '',
		tags = tags ? tags : null;
		
	if(!metric){
		console.log('No metric defined');
		throw new Error('No metric defined');
	}
	
	if(!name){
		console.log('No id defined');
		throw new Error('No id defined');
	}
	
	if(!value){
		console.log('No value defined');
		throw new Error('No value defined');
	}
	
	if(typeof value !== 'string' && typeof value !== 'number'){
		console.log('Value can\'t be an array or object');
		throw new Error('Value can\'t be an array or object');
	}
	
	str += '[nimrod]['+new Date().getTime()+']['+metric+']['+name+']['+value+']';
	
	if(tags){
		if(tags.join){
			tags = tags.join(',');
		}
		if(typeof tags !== 'string'){
			console.log('Tags are of an unsupported type');
			throw new Error('Tags are of an unsupported type');
		}
		str += '['+tags+']';
	}
	
	str += '\n';
	
	 stream = fs.createWriteStream(n.file, {
	 	flags: 'a+',
	 	encoding: 'utf8',
	 	mode: 0644
	 });
	 
	 stream.end(str, 'utf8');
	 stream.destroySoon();
};

/**
 *	End all timers
 */
NimrodLogger.prototype.end = function(){
	var n = this,
		key = null;
	
	for(key in n.timers){
		if(n.timers[key] === true){
			n.stopTimer(key);
		}
	}
};

/**
 * Convert names to 'web safe' names. eg. This Test = this-test
 * Allowed characters = [a-z0-9-_.@]
 */
var normalizeName = function(name){
    // Name is a string
    if(typeof name !== 'string'){
    	console.log('The name provided is not a string');
        throw new Error('The name provided is not a string');
    }
    
    // Lowercase
    name = name.toLowerCase();
    
    // Convert spaces to -
    name = name.split(' ').join('-');
    
    return name;
};


module.exports = NimrodLogger;