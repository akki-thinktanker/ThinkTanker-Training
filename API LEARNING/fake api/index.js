const express = require('express')
const app = express()
const fs = require('fs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

mongoose
  .connect('mongodb+srv://akki:akki11@cluster0.qqhvyzs.mongodb.net/rudra?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful");
  });


  const testSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
  })

  const Test = mongoose.model('Test', testSchema)




const postData = async (req,res,next) => {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;

    console.log(name, age, email)

    await Test.create(req.body)
    res.write(`${name} ${age} ${email}`)
    fs.writeFileSync('userData.txt', `${name}\n${age}\n${email}`)
    res.end();
    
}


const getData = async (req,res,next) => {
    const data =await Test.find()

    // data.forEach(data => console.log(data.name, data.age, data.email))
    const name = data.name;
    const age = data.age;
    const email = data.email;



    console.log(data)
    console.log(name, age, email)

    // res.write(`${name} ${age} ${email}`)
    res.write(data)
    fs.writeFileSync('userData.txt', `${name}\n${age}\n${email}`)
    res.end();
}


app.post('/users', postData)
app.get('/users', getData)


app.listen(8080)
