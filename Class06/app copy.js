const http = require('http');

function queryParser(queries) {
    const obj = {}

    for (let i = 0; i < queries.length; i++) {
        const [key, value] = queries[i].split('=')
        obj[key] = value;
    }

    return obj;
}
const requestParser = (req) => {
    // /login?rememberMe=true&redirect=home

    const [pathString, queryString] = req.url.split('?');

    req.path = pathString.toLowerCase();

    if(queryString) {
        // rememberMe=true&redirect=home
        const queries = queryString.split('&')
        /// { rememberMe: 'true', redirect:'home' }
        const query = queryParser(queries)
        req.query = query;
    }

}

const users = [
    {
        id: 1,
        name:'Ayaz',
    },
    {
        id: 2,
        name:'Salman',
    },
    {
        id: 3,
        name:'Faris'
    }
]


const routes = [
    {
        method: 'GET',
        path: '/users',
        handle: (req,res) => {
            res.end(JSON.stringify(users));
        }
    },
    {
        method: 'GET',
        path: '/users',
        query: ['id'],
        handle: (req,res) => {
            const requiredUser = users.find((user) => user.id == req.query.id)
            if(requiredUser){
                res.end(JSON.stringify(requiredUser));
            }else{
                res.end('User not found');
            }
        }
    },
    {
        method: 'DELETE',
        path: '/users',
        query: ['id'],
        handle: (req,res) => {
            const requiredUserIndex = users.findIndex((user) => user.id == req.query.id)
            users.splice(requiredUserIndex,1);
            res.end(JSON.stringify({
                message: 'User deleted',
                users,
            }));
        }
    }
]


function requestHandler(req, res) {
    requestParser(req);

    // Check for route with query (e.g., /users?id=2)
    let route = routes.find(route =>
        route.method === req.method &&
        route.path === req.path &&
        route.query &&
        route.query.every(q => req.query && req.query[q])
    );

    // If not found, check for route without query (e.g., /users)
    if (!route) {
        route = routes.find(route =>
            route.method === req.method &&
            route.path === req.path &&
            !route.query
        );
    }

    if (route) {
        route.handle(req, res);
    } else {
        res.writeHead(400, {}).end('NO DATA FOR ' + req.path);
    }
};


const app = http.createServer(requestHandler);
const PORT = 3000;
app.listen(PORT, () => console.log('Server started...'))