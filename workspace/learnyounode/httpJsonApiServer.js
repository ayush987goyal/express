var http = require('http');
var url = require('url');

var server = http.createServer((req, res) => {

        var gotUrl = url.parse(req.url, true);
        var gotDate = new Date(gotUrl.query.iso);
        res.writeHead(200, { 'Content-Type': 'application/json'});

        if(gotUrl.pathname.includes('parsetime')){
            var obj = {
                "hour": gotDate.getHours(),
                "minute": gotDate.getMinutes(),
                "second": gotDate.getSeconds()
            };

            res.end(JSON.stringify(obj));
        }
        else if(gotUrl.pathname.includes('unixtime')){
            var objUnix = {
                "unixtime": gotDate.getTime()
            };

            res.end(JSON.stringify(objUnix));
        }
});

server.listen(process.argv[2]);