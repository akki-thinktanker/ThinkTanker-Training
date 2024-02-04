const fs = require('fs')

// appendFile will append the text into file rather overwriting it
fs.appendFile('test.txt', 'Hello world', (err)=>{
    if(err) throw err;

    console.log('saved')
})