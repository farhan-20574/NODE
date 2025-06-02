// const http = require ('http');

const {MiniExpress} = require ('./mini-express.js')

app.get ('./users',(req,res)=>{
    console.log('>>>>',req.url)

    res.end('User data')
})

const PORT = 3000;
app.listen(PORT,() => console.log('Server started...'))