const express = require('express')
const { join } = require('path')
const hbs = require('express-hbs')
const app = express()


app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public')); // Lets us refer to the css file
app.set('view engine', 'hbs')
app.set('views', join(__dirname, 'views'))

app.engine('hbs', hbs.express4({ // view engine that lets us use handlebars
    // defaultLayout: join(__dirname, 'views', 'home', 'home'),
    partialsDir: join(__dirname, 'views', 'partials')
}))

app.use('/', require('./routes/homeRouter'))
app.use('/projects', require('./routes/projectsRouter'))
app.use('/collaborators', require('./routes/collaboratorsRouter'))
app.use('/contact', require('./routes/contactRouter'))
app.use('/about', require('./routes/aboutRouter'))

app.listen(80, () => {
    console.log('application is listening on port 4000')
})