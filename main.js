var http = require('http'), url = require('url');
//var port = process.env.PORT||8080;
var port = 8080;
console.log(process.env.PORT)
http.createServer(function (req, res) {
	
	 var reqUrl = url.parse(req.url);
	 console.log(reqUrl);
	 var reqopt = {
	 			host: reqUrl.host,
	 			hostname: reqUrl.hostname,
	 			port: req.port || 80,
	 			localAddress: req.localAddress,
	 			socketPath: req.socketPath,
	 			method: req.method,
	 			path: reqUrl.path,
	 			auth: reqUrl.auth,
	 			agent: req.agent,
	 			headers: req.headers
	 };
	 
	 console.log(reqopt);
			
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World new\n');
}).listen(port,function(){
		console.log('listen on ',port);
	});
//}).listen(port,'localhost');
console.log('Server xxx running at http://localhost:' + port );