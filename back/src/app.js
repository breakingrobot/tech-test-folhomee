import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import urlRouter from './routes/url.route'
import db from './models'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

db.sequelize.sync({ force: true })

app.use('/url', urlRouter)

export default app
