var http = require('http');

http.get(process.argv[2], function(response) {
    response.on('data', function(data) {
        console.log(data + '\n');
    })
}).on('error', function(data) {
    console.log(data.toString());
});
