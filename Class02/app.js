const http = require ('http');


const server = http.createServer((req, res) => {
    console.log(req)
    res.end();
});

    server.listen(3000, () => {
        console.log('Server is running on port 3000');
    }
    );
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });