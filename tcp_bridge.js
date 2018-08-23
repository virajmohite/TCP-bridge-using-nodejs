/*var net = require('net');

var server = net.createServer(function(socket) {
	//socket.write('Echo server\r\n');
	socket.pipe(socket);
});

server.listen(1331, '129.1.0.1');*/

var net = require('net');

var HOST = '139.59.57.161';
var PORT = 5151;

net.createServer(function(sock) {
	
	 sock.on('data', function(dataii) {
		 //console.log(' HexData : ', dataii.toString('hex'));
		
		console.log('Data : '+ dataii);
		sendToserver(dataii)
		 sock.write('You said "' + dataii + '"');
		 
	 });
	 sock.on('error', function(err) {
		console.log("Caught flash policy server socket error: ");
		console.log(err.stack);
		sock.end();
	  });
	  
	 sock.on('close', function(data) {
        console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
	 });
	
}).listen(PORT, HOST);


var client = new net.Socket();
client.connect(6969, '139.59.57.161', function() {
	console.log('Connected');
	
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	//client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});


function sendToserver(data){
	client.write("data paasess from bridge : "+data);
}
