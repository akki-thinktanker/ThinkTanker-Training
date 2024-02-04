const fs = require('fs')

fs.unlink('test3.txt', (err)=>{
    if(err) throw err
    console.log('deleted')
})