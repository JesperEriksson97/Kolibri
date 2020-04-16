const projectsController = {}

projectsController.renderProjects = (req, res) => {
    res.render('projects/projects')
}

projectsController.createProject = (req, res) => {
    // Create a new project / new fiddle room.
}

projectsController.saveProject = (req, res) => {
    // This function should constantly save the fiddle and send it to the database.
    // Should be called everytime we update
}

projectsController.deleteProject = (req, res) => {
    // Delete a fiddle / project
}

module.exports = projectsController
