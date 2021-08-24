const mongoose = require('mongoose')

const Counters = mongoose.model("counters",mongoose.Schema({
    sequence_val : Number
}))

module.exports = Counters