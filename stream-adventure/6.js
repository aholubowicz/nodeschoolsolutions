var concat = require('concat-stream');
//var through = require('through2');

var cc = concat(function(data) {
    //console.log('koniec')
    console.log(data.toString().split('').reverse().join(''));
})

process.stdin.pipe(cc)

