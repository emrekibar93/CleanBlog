const express = require("express")
const path = require("path")
const ejs = require("ejs")

//TEMPLATE ENGINE
const app = express()
app.set("view engine","ejs");

//MIDDLEWARE
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/add_post',(req,res)=>{
    res.render('add_post')
})

app.get('/post',(req,res)=>{
    res.render('post')
})

const port=3000;

app.listen(port,()=>{
    console.log(`Sunucu ${port} portunda aktif`)
})