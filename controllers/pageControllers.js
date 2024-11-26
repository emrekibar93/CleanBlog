const Post = require('../models/Post')

exports.getAboutPage = (req,res)=>{
    res.render('about')
}

exports.getEditPage  = async (req,res)=>{
    const post = await Post.findOne({
        _id: req.params.id
    })
    res.render('edit_post', { post })
}
exports.getAddPage = (req,res)=>{
    res.render('add_post')
}