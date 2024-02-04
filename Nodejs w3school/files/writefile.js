const fs = require('fs')
// writeFile will overwrite the text instead appending to the file
fs.writeFile('test3.txt', 'and the text is over written', (err) => {
    if(err) throw err; // if some error happens while writing it will throw err
    console.log('saved')
})