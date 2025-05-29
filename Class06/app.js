const http = require ('http')


const app = http.createServer((req, res) => {
    console.log(';;Log;;', req.path, req.url);
res.end();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});