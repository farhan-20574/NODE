const http = require('http');

const server = http.createServer((req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', () => {
        console.log('::log::', req.url);
        console.log('Body:', body);
        res.end('Received body data');
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});