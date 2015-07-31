var through = require('through2');

var th = through(function(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
});

process.stdin.pipe(th).pipe(process.stdout);