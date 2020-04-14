const express = require('express')
const { join } = require('path')
const mongoose = require('mongoose')
const hbs = require('express-hbs')
const app = express()

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
app.use('/register', require('./routes/registerRouter'))

// Socket Setup

// Server Set Up
app.listen(80, () => {
    console.log('application is listening on port 80')
})
