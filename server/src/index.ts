import express from 'express'
import './controllers/LoginController'
import './controllers/RootController'
import bodyParser, { BodyParser } from 'body-parser'
import cookieSession from 'cookie-session'
import { AppRouter } from './AppRouter'

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieSession({ keys: ['sajhnsjdh'] }))
app.use(AppRouter.getInstance())

app.listen(3000, () => {
    console.log('Listening on port 3000')
})