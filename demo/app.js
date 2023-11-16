console.log ('hello')
const express = require('express')
const app = express()
const PORT =1337
app.get('/', (req,res)=> {
    res.send('This is the home page')
})
app.get('/cats',(req,res)=>{
    res.send('This is the cat page')
})
