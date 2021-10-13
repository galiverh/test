var http = require('http');
port = process.env.PORT || process.argv[2] || 8081;
http.createServer(function (request, response) {
    const proxy = require('request');
    proxy.get('https://www.yotube.com'+request.url)
        .on('response', function(res) {

            console.log(res.headers['content-type'])

            let isTxt=res.headers['content-type'].includes('text/html')
            let str=''
            res.on('data', function(data) {
                if(!isTxt)
                    response.write(data)
                else
                    str+=data
            })
            .on('end',()=>{
                //response.end(str.replace(/www.yotube.com/g,'test-gal.herokuapp.com'))
                response.end(str)
            })
    })
}).listen(port);
