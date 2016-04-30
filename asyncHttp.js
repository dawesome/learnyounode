var http = require('http')
var concatStream = require('concat-stream')

var urls = process.argv.slice(2)
var responseNum = urls.length
var text = []

for (i = 0; i < urls.length; ++i) {
	(function (index) {
		http.get(urls[index], function (response) {
			response.setEncoding('utf8')
			response.pipe(concatStream(function(data) {
				text[index] = data
			}))
			response.on('end', finishedResponse)
		})
	})(i)
}



function finishedResponse() {
	--responseNum
	if (responseNum == 0)
	{
		for (i = 0; i < text.length; ++i) {
			console.log(text[i])
		}
		// text.forEach(function(data) {
		// 	console.log(data)
		// })
	}
}