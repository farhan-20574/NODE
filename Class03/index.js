const http = require ('./http.js');


const server = http.createServer(cb1);

server.listen(3000, () => {
        console.log('>>>Listen Called'); 
    });