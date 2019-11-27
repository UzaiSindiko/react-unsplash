const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.post('/:id', UserController.register)
router.delete('/:id', UserController.login)

module.exports = router
