const http = require('http');

// function requestParser(req) {
//     const parsedUrl = url.parse(req.url, true);
//     req.path = parsedUrl.pathname;
//     req.query = parsedUrl.query;
// }

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

   

const PORT = 3000;
const app = http.createServer(requestHandler);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
}