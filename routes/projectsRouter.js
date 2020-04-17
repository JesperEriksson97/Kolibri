const express = require('express')
const router = express.Router()
const projectsController = require('../controller/projectsController')

router.get('/', projectsController.renderProjects)
router.get('/createProject', projectsController.createProject)
router.get('/:_id/edit', projectsController.editProject)
router.get('/:_id/delete')
router.get('/:_id/save')
router.post('/createProject', projectsController.saveProject)

module.exports = router