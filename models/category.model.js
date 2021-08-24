const mongoose = require('mongoose')

const Category = mongoose.model("category", mongoose.Schema({
    categoryId : Number,
    categoryName: String,

}))

module.exports = Category