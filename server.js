var http = require('http');
port = process.env.PORT || process.argv[2] || 80;
http.createServer(function (request, response) {
    
    if(request.url=='/'){
        response.end('hi')
    }else{
    const proxy = require('request');
    proxy.get(request.url,(e,r,b)=>if(e)response.end(e.toString()))
        .on('response', (res,err)=>{

            res.on('data', (d)=>response.write(d))
            .on('end',()=>response.end())
            .on('error',(e)=>console.log(e))
    })
}
}).listen(port,()=>console.log('listTo'+port));
