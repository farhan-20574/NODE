var http = {
     createServer () {
        // Define the callback function
        function cb1(req, res) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello, World!\n');
        }
    },
    listen (port, callback) {
        console.log('>>>Listen Called');
        callback();
    }
    // Define the callback function
}

var server = {
    listen:""
}




