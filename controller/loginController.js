const loginController = {}

loginController.renderLogin = (req, res) => {
    res.render('login/login')
}

loginController.validateUser = (req, res) => {
    console.log(req.body)

    res.redirect('/')
}

module.exports = loginController