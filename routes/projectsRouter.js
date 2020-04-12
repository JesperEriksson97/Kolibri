const express = require('express')
const router = express.Router()
const projectsController = require('../controller/projectsController')

router.get('/', projectsController.renderProjects)

module.exports = router