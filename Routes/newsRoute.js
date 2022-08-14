const router = require('express').Router()
const maxalaNews = require("../controller/news.js")
const multer = require('multer')
const path = require('path')
const md5 = require("md5")

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

router.post('/api/mahala/news', upload.single('photo'), maxalaNews.news)
module.exports = router