const express = require('express')
const router = express.Router()
const registerController = require('../controller/registerController')

router.get('/', registerController.renderRegister)
router.post('/registerUser', registerController.registerUser)


module.exports = router