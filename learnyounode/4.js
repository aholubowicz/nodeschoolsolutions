var filename = process.argv[2];

var fs = require('fs');

fs.readFile(filename, function(err, data) {
    var content = data.toString();
    console.log(content.split("\n").length - 1);
});

