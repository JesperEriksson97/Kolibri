const Fiddle = require('../model/Fiddle')

const projectsController = {}

projectsController.renderProjects = (req, res) => {
   Fiddle.find({collaborators: req.user._id}).lean().then((fiddles) => { // USE LEAN() OR HBS WONT ALLOW.
    res.render('projects/projects', {user: req.user, fiddles: fiddles})
   }).catch((err) => console.log(err))
}

projectsController.createProject = (req, res) => {
    res.render('projects/createProject', {user: req.user})
}

projectsController.updateProject = (req, res, newData, id) => {
    Fiddle.findOneAndUpdate({_id : id}, {data: newData}).then(() => {
        console.log('data updated')
    })
}

projectsController.saveProject = (req, res) => {
    // This function should constantly save the fiddle and send it to the database.
    console.log(req.body)
    console.log(req.user)
    const newFiddle = new Fiddle({
        name: req.body.name,
        owner: req.user._id,
        collaborators: [req.user._id],
        data: " "
    })

    newFiddle.save().then(() => {
        res.redirect('/projects')
    })
    // Should be called everytime we update
}

projectsController.deleteProject = (req, res) => {
    // Delete a fiddle / project
}

projectsController.editProject = (req, res) => {
    Fiddle.findById(req.params._id).lean().then((fiddle) => {
        res.render('projects/editProject', {user: req.user, fiddle: fiddle})
    }).catch((err) => {
        console.log(err)
    })
    // Delete a fiddle / project
    
}

module.exports = projectsController
