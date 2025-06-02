const http = require('http');

class MiniExpress {
    constructor() {
        this.routes = [];
    }
    
    requestHandler(req, res){
       
        if (req) {
            
        }else{
            res
        }
    }
    get(path, handler) {
        this.routes.push({ method: 'GET', path, handler });
    }

    post(path, handler) {
        this.routes.push({ method: 'POST', path, handler });
    }

    start(PORT, callback) {
        const server = http.createServer((req, res) => {
        res.end()
        });
        server.listen(PORT, callback);
        
    }
    
     
}

// Helper function to parse query string into an object
function queryParser(queries) {
    const query = {};
    queries.forEach(q => {
        const [key, value] = q.split('=');
        query[key] = value;
    });
    return query;
}

function requestParser(req) {
    const [pathString, queryString] = req.url.split('?');
    req.path = pathString;
    if (queryString) {
        const queries = queryString.split('&');
        req.query = queryParser(queries);
    }
}

module.exports = {
    MiniExpress
};