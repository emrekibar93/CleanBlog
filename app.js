const express = require("express")
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const path = require("path")
const ejs = require("ejs")
const Post = require('./models/Post')
const postControllers = require('./controllers/postControllers')
const pageControllers = require('./controllers/pageControllers')


//TEMPLATE ENGINE
const app = express()

app.set("view engine","ejs");

// connect db
mongoose.connect('mongodb://localhost/cleanblog-test-db');

//MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }))

app.get ('/', postControllers.getAllPosts)
app.get('/posts/:id', postControllers.getPost)
app.post('/posts', postControllers.createPost)
app.put('/posts/:id', postControllers.updatePost)
app.delete('/posts/:id', postControllers.deletePost )

app.get('/about', pageControllers.getAboutPage)
app.get('/posts/edit/:id', pageControllers.getEditPage)
app.get('/add_post',pageControllers.getAddPage)





const port=3000;

app.listen(port,()=>{
    console.log(`Sunucu ${port} portunda aktif`)
})