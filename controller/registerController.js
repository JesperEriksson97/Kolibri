const registerController = {}

registerController.renderRegister = (req, res) => {
    res.render('register/register')
}

registerController.registerUser = (req, res) => {
    console.log(req.body)

    res.redirect('/login')
}

module.exports = registerController