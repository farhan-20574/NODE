const http = require('http');
const url = require('url');

function requestParser(req) {
    const parsedUrl = url.parse(req.url, true);
    req.path = parsedUrl.pathname;
    req.query = parsedUrl.query;
}

// get('/login', (req, res) => {
//     console.log('>>>LOGIN PAGE');
// });
// post('/login', (req, res) => {
//     console.log('>>>LOGIN SUCCESS');
// });

function requestHandler(req, res) {
    requestParser(req);

    console.log('::log::', req.path);
    console.log('::log::', req.method);

    switch (req.path) {
        case '/login':
            switch (req.method) {
                case 'GET':
                    console.log('>>>LOGIN PAGE');
                    break;
                case 'POST':
                    console.log('>>>LOGIN SUCCESS');
                    break;
            }
            break;
        case '/search':
            if (req.method === 'GET' && req.query) {
                console.log('>>>SEARCH ACTION');
                if (req.query.product) {
                    console.log('>>>SEARCH PRODUCT');
                }
            }
            break;
        default:
            // Optionally handle other routes
            break;
    }
    res.end();
}

const PORT = 3000;
const app = http.createServer(requestHandler);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});