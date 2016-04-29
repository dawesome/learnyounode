var printDir = require('./printDir')

printDir(process.argv[2], process.argv[3], function(err, data) {
	data.forEach(function(fileName) {
		console.log(fileName);
	})
})