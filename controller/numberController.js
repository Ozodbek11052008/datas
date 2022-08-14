const model = require("../models/numberSchema")

const  numberController = {
    createNumber : async (req, res) => {
        const number = new model({
            number : req.body.number
        })
        await number.save()
        .then(data => res.send(data))
        .catch(err => {
            res.send(err)
        })
    }
}
module.exports = numberController
