var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end('Hello, Prashanth Kumar Belidha!');
    
}).listen(process.env.PORT || 8080);
