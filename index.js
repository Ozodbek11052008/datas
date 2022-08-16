const express = require('express')
const app = express()
const PORT = process.env.PORT || 7000
const path = require('path')
const connectDB = require('./config/config')
const cors = require('cors')
// for get  api in  other project
connectDB()
// for save in mongo db
app.use(express.json(), express.urlencoded({ extended: true }))
// for support json dtas
app.use(express.static(path.join(__dirname + '/public')))
// for open folders and files in public folder
app.set('view engine', 'ejs')
app.use(require('express-ejs-layouts'))
app.set('views', './view')
// for support ejs
app.use(require('./routes/mahalaRoute'))
app.use(require('./routes/newsRoute'))
app.use(require('./routes/reklamaRoute'))
app.use(require('./routes/numberRoute'))
app.use(require('./routes/navRoute'))
// for send datas
const model = require("./models/mahalaSchema")
const newsmodel = require('./models/newsmodel')
app.get('/', (req, res) => {
    res.render('datas/index.ejs', {
        layout: false,
    })
})

app.get('/product', async (req, res) => {
    try {
        const data = await model.find()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})
// for see datas for carousel
app.get('/news', async (req, res) => {
    try {
        const data = await newsmodel.find()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})
// for see for news

app.listen(PORT, () => {
 
    console.log(`Sever is running at ${PORT} port`)
})