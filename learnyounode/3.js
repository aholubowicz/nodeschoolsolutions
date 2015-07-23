var filename = process.argv[2];

var fs = require('fs');

var content = fs.readFileSync(filename).toString();

console.log(content.split("\n").length - 1);