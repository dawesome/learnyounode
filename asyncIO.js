var fs = require('fs');
fs.readFile(process.argv[2], onFileRead)

function onFileRead(error, data) {
	if (!error) {
		console.log(data.toString().split('\n').length - 1);
	}
}
