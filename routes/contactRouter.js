const express = require('express')
const router = express.Router()
const contactController = require('../controller/contactController')

router.get('/', contactController.renderContact)

module.exports = router