const router = require('express').Router()
const userRoute = require('./userRoute')
const unsplashRoute = require('./unsplashRoute')

router.use('/users', userRoute)
router.use('/apis', unsplashRoute)

module.exports = router
