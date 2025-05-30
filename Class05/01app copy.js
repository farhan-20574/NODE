const http = require('http');
// const url = require('url');

function requestParser(req) {
    const parsedUrl = url.parse(req.url, true);
    req.path = parsedUrl.pathname;
    req.query = parsedUrl.query;
}

post('/login', (req, res) => {
    console.log('>>>LOGIN SUCCESS');
});

const server = http.createServer(requestHandler);

function requestHandler(req, res) {
    // requestParser(req);

    console.log('::log::', req.path);
    console.log('::log::', req.method);

    // switch (req.path) {
    //     case '/login':
    //         switch (req.method) {
    //             case 'GET':
    //                 console.log('>>>LOGIN PAGE GET');
    //                 break;
    //             case 'POST':    
    //                 console.log('>>>LOGIN SUCCESS POST');
    //                 break;
    //         }
    //         break;
    //     case '/search':
    //         if (req.method === 'GET' && req.query) {
    //             console.log('>>>SEARCH ACTION');
    //             if (req.query.product) {
    //                 console.log('>>>SEARCH PRODUCT');
    //             }
    //         }
    //         break;
    //     default:
    //         // Optionally handle other routes
    //         break;
    // }
    res.end();
}

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});