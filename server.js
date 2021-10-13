var server = require('http').Server();
var io = require('socket.io')(server);

server.listen(8080, () => console.log(`Server is running on port 8080`));

io.on('connection', function (socket) {
    socket.join('ali');
    socket.on('msg', function (data) {
        console.log(data)
        socket.broadcast.emit('msg',data)
    })
    socket.on('stream', function (data) {
        console.log(data)
 
    })
 
})
