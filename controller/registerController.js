const { check, validationResult } = require('express-validator');
const registerController = {}
const User = require('../model/User')

registerController.renderRegister = (req, res) => {
    res.render('register/register')
}

registerController.registerUser = (req, res) => {
    console.log(req.body)

    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    const lastname = req.body.lastname

    if(email.length <= 0 || password.length < 0 || name.length <= 0 || lastname.length <= 0) {
        res.render('register/register', {error: 'All fields needs to be filled in'})
    } else if(password.length < 7) {
        res.render('register/register', {error: 'Your password needs to be atleast 7 characters long'})
    } else if(!email.includes('@')) {
        res.render('register/register', {error: 'Your email is invalid'})
    } else {
        const newUser = new User({
            email: email,
            name: name,
            lastname: lastname,
            password: password
        })

        User.createUser(newUser, (err, user) => {
            if(err) {
                throw err;
            }
            res.render('login/login', {success_msg:  'You are registered and can now log in'})
        })
    }
}

module.exports = registerController