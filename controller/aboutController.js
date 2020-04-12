const aboutController = {}

aboutController.renderAbout = (req, res) => {
    res.render('about/about')
}

module.exports = aboutController