const mongoose = require('mongoose')

const maxalaNumber = mongoose.Schema({
    number: {
        type: Number,
        required: true,
        trim: true,
        maxlength: 100,
        minLength: 9
    },
  

}, {
    timestamps: true
})

module.exports = mongoose.model("maxalaNumber", maxalaNumber)