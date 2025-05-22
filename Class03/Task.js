const http = {
     createServer () {
        // Define the callback function
        function cb1(req, res) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello, World!\n');
        }
    },
    
    request: {
        url: '/home'
    },
    response: {
        end() {
            console.log('>>>Response Called');
            return;
        }
    },
    createServer(cb1) {
        cb1?.(this.request, this.response);
        return;
    }
}

server.listen(3000, () => {
    console.log('Server is running!');
});



