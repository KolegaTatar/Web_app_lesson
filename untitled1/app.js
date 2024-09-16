var url = require("url");
var fs = require("fs");

function renderHTML(path, response){
    fs.readFile(path,null, function(err, data){
        if(err){
            response.write(404);
        }
        else{
            response.write(data);
        }
        response.end();
    })
}
module.exports = {
    handlerRequest: function(request, response) {
        response.writeHead(200, {'Content-Type': 'text/html'});

        var path = url.parse(request.url).pathname;
        switch (path) {
            case '/':
                renderHTML('.index.html', response);
                break;
        }
    }
}