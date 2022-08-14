const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const md5 = require("md5")
const reklamaConrtoller = require('../controller/reklamaController.js')

const store = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename(req, file, cb) {
        const ext = path.extname(file.originalname)
        cb(null, md5(Date.now()) + ext)
    }
})

const upload = multer({
    storage: store
})

router.post('/api/mahala/reklama', upload.single('photo'), reklamaConrtoller.createReklama)
module.exports = router