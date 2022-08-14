const model = require("../models/navSchema")

const navController = {
    createNav: async (req, res) => {
        const number = new model({
            navigation: req.body.navigation
        })
        await number.save()
            .then(data => res.send(data))
            .catch(err => {
                res.send(err)
            })
    }
}
module.exports = navController
