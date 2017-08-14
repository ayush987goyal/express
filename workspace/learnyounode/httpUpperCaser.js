var map = require('through2-map');
var http = require('http');

var server = http.createServer((req, res) => {
    req.pipe( map( chunk => {
        return chunk.toString().toUpperCase()
    })).pipe(res);
});

server.listen(process.argv[2]);