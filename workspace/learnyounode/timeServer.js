var net = require('net');

function zeroFill(i){
    return (i < 10 ? '0' : '') + i
}

var server = net.createServer((socket) => {
    var date = new Date();
    var result = date.getFullYear().toString() + '-' + zeroFill((date.getMonth() + 1)) + '-' + zeroFill(date.getDate()) + ' ' + zeroFill(date.getHours()) + 
     ':' + zeroFill(date.getMinutes().toString()) + '\n';

     socket.end(result)
})

server.listen(process.argv[2]);