var http = require('http');
var url = require('url');

var toJson = function(string) {
    var res = {};
    var date = new Date(string);
    res.hour = date.getHours();
    res.minute = date.getMinutes();
    res.second = date.getSeconds();
    return res
}

var toMillis = function(string) {
    var res = {};
    var date = new Date(string);
    res.unixtime = date.getTime();
    return res;
};

http.createServer(function (req, res) {
    var parse = url.parse(req.url, true);
    console.log(parse);

    res.writeHead(200, {'Content-Type': 'application/json'});
    if (parse.pathname.indexOf('parsetime') !== -1) {
        res.end(JSON.stringify(toJson(parse.query.iso)));
    } else {
        res.end(JSON.stringify(toMillis(parse.query.iso)));
    }

})
    .listen(process.argv[2]);

//console.log(toJson('2013-08-10T12:10:15.474Z'));
//console.log(toMillis('2013-08-10T12:10:15.474Z'));
//console.log(/hehe/.test('ahehee'))