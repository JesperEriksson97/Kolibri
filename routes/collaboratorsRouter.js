const express = require('express')
const router = express.Router()
const collaboratorsController = require('../controller/collaboratorsController')

router.get('/', collaboratorsController.renderCollaborators)

module.exports = router