const mongoose = require('mongoose');

const Article = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true , default: "Julien Safou" }, 
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('article', Article, 'article');