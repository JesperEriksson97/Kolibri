const express = require('express')
const router = express.Router()
const collaboratorsController = require('../controller/collaboratorsController')

router.get('/', collaboratorsController.renderCollaborators)
router.get('/requests', collaboratorsController.renderCollaboratorsRequest)
router.get('/add', collaboratorsController.renderCollaboratorsAdd)

module.exports = router