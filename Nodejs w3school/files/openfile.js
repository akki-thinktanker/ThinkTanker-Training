const fs = require('fs')

fs.open('test4.txt', 'r', (err,file)=>{
    if(err) throw err
    console.log(file)
    console.log('saved')
})