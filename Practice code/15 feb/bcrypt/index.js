const bcrypt = require('bcrypt')

const pass = '123454321'
const wrongPass = '123456789'

const encryptedPass = bcrypt.hashSync(pass, 10)

console.log(encryptedPass)


const checkPass = bcrypt.compareSync(wrongPass, encryptedPass)

console.log(checkPass)
