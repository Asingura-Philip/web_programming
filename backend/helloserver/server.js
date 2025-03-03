const express = require('express')
const app = express()

const port = 3000;

app.get('/hello',(req,res)=>{
    res.send("hello world")
})

function requestLogger(req,res,next){
    console.log(`request method: ${req.method},URL: ${req.url}`)
    next();
}
app.get('*',(req,res)=>{
    res.send('this route does not exist')
})

app.listen(port,()=>{
    console.log(`the server is running on ${port}`)
})