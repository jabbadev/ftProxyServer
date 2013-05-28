var http = require('http'), url = require('url');
var port = process.env.PORT||5000;
http.createServer(function (req, res) {
	var _url = url.parse(req.url);
	
	var reqOpt = {
		host: _url.host, 
		hostname: _url.hostname,
		port: _url.port || 80,
		localAddress: null,
		socketPath: null,
		method: req.method,
		path: _url.path,
		headers: req.headers,
		auth: null,
		agent: req.headers["user-agent"]
	};

	http.request(reqOpt);
	
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Francesco\n');
  
}).listen(port,function(){
		console.log('listen on ',port);
});

console.log('Server running at http://localhost:' + port );