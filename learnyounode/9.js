var http = require('http')
var bl = require('bl');

var res = {};

function printAll() {
    for (key in res)
        console.log(res[key])
}

for (var i = 0; i < 3; i++) {
    //console.log(process.argv[2 + i])

    http.get(process.argv[2 + i], function(response) {
        //console.log(response.req._headers.host)
        response.pipe(bl(function(err, data) {
            res[response.req._headers.host] = data.toString();

            if (Object.keys(res).length == 3) {
                printAll();
            }
        }))
    })
}

//res.hehe = 1
//res.hehe2 = 1
//console.log(Object.keys(res).length)

//console.log(process.argv.slice(2))