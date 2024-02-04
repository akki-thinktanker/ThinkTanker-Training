const fs = require('fs')

fs.appendFile('test.txt', 'this text is appended in test.txt file', (err) => {
    if(err) throw err
    console.log('updated')
})

// appendFile will append text content to the end of file
// meanwhile fs.writeFile will overwrite the text of the entire file 