const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://yosh_dasturchi:11052008ozod@cluster0.qih2a9m.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser : true
    })
    .then(data => {
        console.log('Mongodb is connected');
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = connectDB