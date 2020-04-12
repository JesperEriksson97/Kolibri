const homeController = {}

homeController.renderHome = (req, res) => {
    res.render('home/home')
}

module.exports = homeController
