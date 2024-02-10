const express = require('express')
const app=express()
const logger=require ('morgan')
app.use(logger('dev'))
const cors = require('cors')
app.use(cors())

app.use('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

//404 page
app.use((req,res)=>{
    res.status(404).sendFile(__dirname +'/404_page.html')
})

app.listen(4000,(req,res)=>{
    console.log('server is running in port 4000');
})
