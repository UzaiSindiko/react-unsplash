const router = require('express').Router()
const UnsplashController = require('../controllers/UnsplashController')

router.get('/', UnsplashController.find)
router.get('/search', UnsplashController.search)
router.get('/:id', UnsplashController.findOne)

module.exports = router
