var http = require('http')
var fs   = require('fs')

var server = http.createServer(onConnection)
server.listen(process.argv[2])

var filePath = process.argv[3]

function onConnection(request, response) {
	response.writeHead(200, { 'content-type': 'text/plain' })
	var fileStream = fs.createReadStream(filePath)
	fileStream.pipe(response)

}