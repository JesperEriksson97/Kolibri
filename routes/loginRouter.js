const express = require('express')
const router = express.Router()
const loginController = require('../controller/loginController')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../model/User')


passport.use(new LocalStrategy(
    function(username, password, done) {
      User.getUserByUsername(username, function(err, user) {
        if(err) throw err;
        if(!user) {
            return done(null, false, {message: 'Unknown user'})
        }

        User.comparePassword(password, user.password, function(err, isMatch) {
            if(err) throw err;
            if(isMatch) {
                return done(null, user)
            } else {
                return done(null, false, {message: 'Invalid password'})
            }
        })
    })
}))

passport.serializeUser(function(user, done) {
    console.log('In serialize')
    done(null, user.id)
})
    
passport.deserializeUser(function(id, done) {
    console.log('In deserialize')
    User.getUserById(id, function(err, user) {
        done(err, user)
    })
})

router.get('/', loginController.renderLogin)
router.post('/validate', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login', failureFlash: true}), function(req, res) { // This one is being called
})

module.exports = router