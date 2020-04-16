const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { join } = require('path')
const mongoose = require('mongoose')
const hbs = require('express-hbs')
const app = express()
const path = require('path')

app.use(session({
  secret: 'averysecretstring',
  saveUninitialized: true,
  resave: true
}))

// Connect Flash
app.use(flash())

// Global Vars
app.use(function (req, res, next) {
  res.locals.succes_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error') // To coop with passport
  res.locals.user = req.user || null
  next()
})

// Database Set Up
const db = require('./configs/keys').mongoURI
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

// View Engine Set Up
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public')); // Lets us refer to the css file
app.set('view engine', 'hbs')
app.set('views', join(__dirname, 'views'))

// BodyParser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cookieParser())

// Passport Init
app.use(passport.initialize())
app.use(passport.session())

// Handlebars
app.engine('hbs', hbs.express4({
    partialsDir: join(__dirname, 'views', 'partials')
}))

// Routing
app.use('/', require('./routes/homeRouter'))
app.use('/projects', require('./routes/projectsRouter'))
app.use('/collaborators', require('./routes/collaboratorsRouter'))
app.use('/contact', require('./routes/contactRouter'))
app.use('/about', require('./routes/aboutRouter'))
app.use('/login', require('./routes/loginRouter'))
app.use('/logout', require('./routes/logoutRouter'))
app.use('/register', require('./routes/registerRouter'))

// Socket Setup

// Server Set Up
app.listen(80, () => {
    console.log('application is listening on port 80')
})
