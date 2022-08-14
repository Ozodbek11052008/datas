const mongoose = require('mongoose')

const  navText = mongoose.Schema({
    navigation: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
        minLength: 30
    },
  

}, {
    timestamps: true
})

module.exports = mongoose.model("navigationTetxt", navText)