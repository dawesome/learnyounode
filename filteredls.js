var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var extention = '.' + process.argv[3];

fs.readdir(dir, 
	function(err, list) {
		if (!err) {
			for (var i = 0; i < list.length; ++i) {
				if (path.extname(list[i]) == extention) {
					console.log(list[i]);
				}
			}
		}
	}
);
