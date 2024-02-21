const express = require('express')
const notFound = require('./middlewares/not-found')
const error = require('./middlewares/error')
const router = require('./routes/taskRoute')
const connectDB = require('./db/connection')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000
app.use([express.json()])

app.get('/', (req, res) => {
    res.send('Welcome to task api')
})
// routes
app.use('/api/v1/tasks', router)
// middlewares

app.use(notFound)
app.use(error)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        console.log('connected to db!')
        app.listen(port, () => console.log(`server is listening on ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()
