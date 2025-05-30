//import http from node 
const http = require ('http');



// Create a server


const server = http.createServer((req, res) => {
    console.log('Request received',req);
    res.end();
});

// Listen on port 3000
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log('Server started successfully');
});