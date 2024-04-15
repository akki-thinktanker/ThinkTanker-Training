const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`MongoDB connected: ${process.env.MONGODB_URI}`)
    }
    catch(error)
    {
        console.error(error.message)
        process.exit(1)
    }
}

module.exports = connectDB