var http = require('http');
var through = require('through2');

http.createServer(function (req, resp) {
    var r = '';
    var receive = function (buf, _, next) {
        r += buf.toString().toUpperCase();
        console.log('received' + r)
        //this.push(buf.toString().toUpperCase());
        next();
    };
    var done = function (done) {
        console.log('im done')
        resp.end(r);
        done();
    };
    req.pipe(through(receive, done));
}).listen(process.argv[2]);