var http = require('http')
var url  = require('url')

http.createServer( (request, response) => {
	response.writeHead(200, { 'content-type': 'application/json' })

	var parsedURL = url.parse(request.url, true)
	var stringTime = parsedURL.query['iso']
	var returnDate = {}
	if (parsedURL.pathname == "/api/parsetime") {
		returnDate = getHMS(stringTime)
	} else if (parsedURL.pathname == '/api/unixtime') {
		returnDate = getUnixTime(stringTime)
	}

	response.write(JSON.stringify(returnDate));
	response.end()
}).listen(process.argv[2])

function getHMS(stringTime) {
	var date = new Date(stringTime)
	return { 'hour' : date.getHours(),
			 'minute' : date.getMinutes(),
			 'second' : date.getSeconds() }
}

function getUnixTime(stringTime) {
	return { 'unixtime' : new Date(stringTime).getTime() }
}