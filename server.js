var http = require('http');
var dt = require('node-datetime');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time is currently: " + dt(now, "longTime", true));
  res.end();
	}).listen(process.env.PORT || 8080);

