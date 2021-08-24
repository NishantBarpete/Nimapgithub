const mongoose = require('mongoose')

const Product = mongoose.model("product", mongoose.Schema({
    productId : Number,
    productName: String,
    categoryName : String,
    cateogoryId : Number

},{timestamps : true}))

module.exports = Product