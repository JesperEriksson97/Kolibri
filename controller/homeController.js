const homeController = {}

homeController.renderHome = (req, res) => {
    // Use req.session.flash
    console.log(req.user)
    const user = req.user
    res.render('home/home', {user: user})
}

module.exports = homeController
