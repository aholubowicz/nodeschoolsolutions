var readfiles = require('./readfiles');

var dir = process.argv[2];
var ext = process.argv[3];

readfiles(dir, ext, function(err, data) {
    data.forEach(function(file) {
        console.log(file)
    });
});