var http = require('http');
port = process.env.PORT || process.argv[2] || 8081;
http.createServer(function (req, res) {
    const request = require('request');
    request('http://www.google.com', function (error, response, body) {
        res.writeHead(response.statusCode, response.headers);
        res.write(body)
        res.end()
    });
}).listen(port);
