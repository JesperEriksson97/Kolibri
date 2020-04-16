const logoutController = {}

logoutController.logout = (req, res) => {
    req.logout();
    res.redirect('/')
}

module.exports = logoutController