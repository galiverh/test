var http = require('http');
port = process.env.PORT || process.argv[2] || 8081;
http.createServer(function (request, response) {

    const proxy = require('request');
    // proxy('https://www.youtube.com'+request.url,(err,res,b) =>{
    //     res.on('data',d=>response.write(d))
    //     res.on('end',d=>response.end())
    // });
    
    proxy.get('https://www.google.com'+request.url)
        .on('response', function(res) {

            res.on('data', function(data) {
                response.write(data)
            })
                .on('end',()=>response.end())
    })



}).listen(port);
