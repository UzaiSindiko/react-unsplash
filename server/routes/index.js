const router = require('express').Router()
const userRoute = require('./userRoute')
const unsplashRoute = require('./unsplashRoute')
const collectionRoute = require('./collectionRoute')

router.use('/users', userRoute)
router.use('/apis', unsplashRoute)
router.use('/collections', collectionRoute)

module.exports = router
