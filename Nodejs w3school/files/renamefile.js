const fs = require('fs')

fs.rename('testtwo.txt', 'test2.txt', (err) => {
    if(err) throw err // this will be executed if I try to rename a file which doesn't even exist
    console.log('renamed')
})