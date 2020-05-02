const collaboratorsController = {}

collaboratorsController.renderCollaborators = (req, res) => {
    res.render('collaborators/collaborators')
    // Gather all friends and present them
}

collaboratorsController.renderCollaboratorsAdd = (req, res) => {
    res.render('collaborators/add')
    // Search a friend by Name
}

collaboratorsController.renderCollaboratorsRequest = (req, res) => {
    res.render('collaborators/requests')
    // Show friend requests
}

module.exports = collaboratorsController