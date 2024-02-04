const fs = require('fs')

fs.open('test2.txt', 'w', (err,file)=>{
    if(err) throw err
    console.log(file)
    console.log('saved')
})