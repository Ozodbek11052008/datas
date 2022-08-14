const model = require("../models/mahalaSchema")

const mahalaController = {
    datas : async (req, res) => {
        const price = new model({
            title : req.body.title,
            description : req.body.description,
            photo : req.file.filename
        })
        await price.save()
            .then(data => res.send(data))
            .catch(err => {
                res.send(err)
            })

    },

    deleteProducts: async (req, res) => {
        await model.findByIdAndDelete(req.params.id)
            .then(data => res.send(data))
            .catch(err => res.send(err))
    },
}

module.exports = mahalaController