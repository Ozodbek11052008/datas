const router = require('express').Router()
const navController = require('../controller/navController.js')



router.post('/api/mahala/nav', navController.createNav)
module.exports = router