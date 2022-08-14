const mongoose = require('mongoose')

const maxalaNews = mongoose.Schema({
    news: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
        minLength: 3
    },
    description: {
        type: String,
        required: true,
        minLength: 4,
        maxlength: 50
    },
    photo : String
}, {
    timestamps: true
})

module.exports = mongoose.model("maxalaNews", maxalaNews)