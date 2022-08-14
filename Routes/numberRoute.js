const router = require('express').Router()
const numberController = require('../controller/numberController.js')


router.post('/api/mahala/number', numberController.createNumber)

module.exports = router