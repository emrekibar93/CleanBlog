const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    detail: String,
    dateCreated:{
        type: Date,
        default: Date.now
    }
})

//collection oluşturuyor(MODEL)
const Post = mongoose.model('Post',PostSchema);

module.exports = Post;