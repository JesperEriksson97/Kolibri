const loginController = {}

loginController.renderLogin = (req, res) => {
    console.log(req)
    if(req.sessionID) {
        res.render('home/home', {user: req.sessionID})
    } else {
    res.render('login/login')
    }
}

module.exports = loginController