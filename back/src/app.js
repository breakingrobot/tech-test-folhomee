import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import paginate from 'express-paginate'
import urlRouter from './routes/url.route'
import db from './models'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())
app.use(paginate.middleware(10, 50))

db.sequelize.sync()

app.use('/url', urlRouter)

export default app
