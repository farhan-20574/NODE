const http = require('http'); // Use built-in http module

// Define the callback function
function cb1(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
}

const server = http.createServer(cb1);

server.listen(3000, () => {
    console.log('>>>Listen Called');
});