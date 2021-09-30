// npm i express uuid dotenv cors ejs mysql2 http-errors jsonwebtoken lodash numeral moment morgan fs- extra
// npm i express lodash numeral moment dotenv ejs cors mysql2 sequelize passport uuid multer http-errors express-session helmet morgan

/*************** global init *****************/
require('dotenv').config()
const port = process.env.PORT
const path = require('path')
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken');
const cors = require('cors')


/*************** server init  *****************/
require('./modules/server-init')(app, process.env.PORT)


/*************** view engine *****************/
app.set('view engine', 'ejs')
app.set('views', './views')
app.locals.pretty = true


/*************** Middleware *****************/
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



/*************** static init *****************/
app.use('/',express.static( path.join(__dirname, 'public') ))



/*************** router init *****************/
const apiRouter = require('./routes/api')
const devRouter = require('./routes/dev')
app.use('/api', apiRouter)
app.use('/dev', devRouter)


app.get('/token', (req, res, next) => {
	let token = jwt.sign({ 
		userid: 'wonbin',
		nickname: '비니빈' 
		}, 
		process.env.JWT_KEY, { expiresIn: 60 * 60 })
	res.send(token)
})

/*************** error init *****************/
const _404Router = require('./routes/error/404-router')
const _500Router = require('./routes/error/500-router')

app.use(_404Router)
app.use(_500Router)


