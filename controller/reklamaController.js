const model = require("../models/reklamaSchema")

const  reklamaConrtoller = {
    createReklama : async (req, res) => {
        const reklama = new model({
            title : req.body.title,
            description : req.body.description,
            photo : req.file.filename
        })
        await reklama.save()
        .then(data => res.send(data))
        .catch(err => {
            res.send(err)
        })
    }
}
module.exports = reklamaConrtoller
