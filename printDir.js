module.exports = function(dirName, extention, callback) {
	var fs = require('fs');
	var path = require('path');


	fs.readdir(dirName, 
		function(err, list) {
			if (err) {
				return callback(err);
			}

			var array = []
			for (var i = 0; i < list.length; ++i) {
				if (path.extname(list[i]) == '.' + extention) {
					array.push(list[i]);
				}
			}

			return callback(null, array);
		}
	);	
}
