const loginController = {}

loginController.renderLogin = (req, res) => {
    res.render('login/login')
}

module.exports = loginController