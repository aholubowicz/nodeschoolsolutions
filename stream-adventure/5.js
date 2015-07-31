var through2 = require('through2');
var split = require('split');
var line_num = 0;

var th = through2(function(line, _, next) {
    if (line_num++ % 2 == 0) {
        this.push(line.toString().toLowerCase() + '\n')
    } else {
        this.push(line.toString().toUpperCase() + '\n')
    }
    next();
})

process.stdin.pipe(split()).pipe(th).pipe(process.stdout);