const http = require ('http');

const { MiniExpress } = require('./mini-express.js')

const app = new MiniExpress();

app.get('./users', (req, res) => {
    console.log('>>>>', req.url)

    res.end('User data')
})



const PORT = 3000;
app.start(PORT, () => console.log('Server started...'))