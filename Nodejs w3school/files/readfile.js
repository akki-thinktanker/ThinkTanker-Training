const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{ // create server
    fs.readFile('file1.html', (err,data)=>{ //read file using inbuilt method readFile and respond
        res.writeHead(200, {'Content-Type':'text/html'}) //specifying header with status code and content type
        res.write(data) // writing data of file to web
        return res.end() // ending response so nothing can be done after this line  
    })
}).listen(8080)