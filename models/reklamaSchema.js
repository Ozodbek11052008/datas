const mongoose = require('mongoose')

const reklamaSchema = mongoose.Schema({
    title: {
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

module.exports = mongoose.model("reklama", reklamaSchema)