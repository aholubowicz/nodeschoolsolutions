var http = require('http');
var bl = require('bl');

function sol1(response) {
    var res = '';

    response.on('data', function (data) {
        res += data;
    })
    response.on('end', function (data) {
        if (data)
            res += data;
        console.log(res.length);
        console.log('\n')
        console.log(res)
    })
}
function sol2(response) {
    response.pipe(bl(function (err, data) {
        var res = data.toString();
        console.log(res.length);
        console.log('\n');
        console.log(res)
    }))
}
http.get(process.argv[2], function (response) {
    //sol1(response);
    sol2(response);
});