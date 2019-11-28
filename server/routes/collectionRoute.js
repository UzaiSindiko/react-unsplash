const router = require('express').Router()
const CollectionController = require('../controllers/CollectionController')
const { authentication, authorization } = require('../middleware/auth')

router.get('/', authentication, CollectionController.find)
router.post('/:id', authentication, CollectionController.add)
router.delete('/:id', authentication, authorization, CollectionController.remove)

module.exports = router
