const fs = require('fs')
const rs = fs.createReadStream('./demo.txt')
rs.on('open', ()=>{
    console.log('file is open')
})