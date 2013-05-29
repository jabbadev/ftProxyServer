var http = require('http');
var port = process.env.PORT||5000;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Deploy OK\n');
}).listen(port,function(){
		console.log('listen on ',port);
	});
//}).listen(port,'localhost');
console.log('Server running at http://localhost:' + port );