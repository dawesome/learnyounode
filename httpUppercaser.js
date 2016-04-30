var http = require('http')
var map  = require('through2-map')

var server = http.createServer(onConnection)
server.listen(process.argv[2])

function onConnection(request, response) {
	// if (request.method != 'POST') {
	// 	return response.end()
	// }
	response.writeHead(200, { 'content-type': 'text/plain' })
	request.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase()
	})).pipe(response)
}
