var net = require('net');

var fill = function(num) {
    if (num < 10) return '0' + num;
    return num.toString();
}

var now = function() {
    var time = new Date();
    time.getYear();
    return time.getFullYear()
        + '-' + fill((time.getMonth() + 1))
        + '-' + fill(time.getDate())
        + ' ' + fill(time.getHours())
        + ':' + fill(time.getMinutes())
}

var server = net.createServer(function(socket) {
    //console.log("connected");
    socket.end(now() + '\n');
});

server.listen(process.argv[2]);
//console.log(now())
//console.log(fill(10))

