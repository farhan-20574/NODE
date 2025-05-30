// const http = require('http');
const { MiniExpress } = require('./Node6TaskA/views/mini-express.js');

const app = new MiniExpress();

app.get('',(req, res)=>{
    console.log(req.url)
})

// app.get('/users',(req, res)=>{

// });


app.start(3000, () => console.log('Server started...'))
