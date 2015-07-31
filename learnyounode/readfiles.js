var myfun = function(dir, ext, callback) {
    var fs = require('fs');
    var path = require('path');

    fs.readdir(dir, function(err, data) {
        if (err) {
            callback(err);
            return;
        }
        var res = [];
        data.forEach(function (file) {
            if (path.extname(file) === '.' + ext)
                res.push(file)
        });
        callback(null, res)
    })
}

//myfun('.', 'js', function(err, data) {
//    console.log(data)
//})
 module.exports = myfun