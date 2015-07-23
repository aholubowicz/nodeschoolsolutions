var http = require('http');
var fs = require('fs');

//console.log(process.argv[3]);
http.createServer(function(request, response) {
    fs.createReadStream(process.argv[3]).pipe(response);
    //console.log(request);
}).listen(process.argv[2]);