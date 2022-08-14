const model = require("../models/newsmodel")

const  maxalaNews = {
    news : async (req, res) => {
        const news = new model({
            news : req.body.news,
            description : req.body.description,
            photo : req.file.filename
        })
        await news.save()
        .then(data => res.send(data))
        .catch(err => {
            res.send(err)
        })
    }
}
module.exports = maxalaNews
