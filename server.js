var http = require('http');
port = process.env.PORT || process.argv[2];
http.createServer(function (request, response) {
    const proxy = require('request');
    proxy.get(request.url)
        .on('response', function(res) {
            res.on('data', function(data) {
                    response.write(data)
            })
            .on('end',()=>{
                response.end()
            })
    })
}).listen(port,()=>console.log('listTo'+port));
