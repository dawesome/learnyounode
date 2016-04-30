var net = require('net')
var strftime = require('strftime')

var server = net.createServer(onConnection)
server.listen(process.argv[2])

function onConnection(socket) {
	socket.write(strftime('%F %H:%M\n', new Date()))
	socket.end()
}

