require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const authRouter = require('./routes/authRoutes')
const globalErrorHandler = require('./controllers/errorController')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())


const PORT = process.env.PORT

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRoutes)


app.use(globalErrorHandler);

// making sure if database connection is present then only server gets started
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`)
    })
})