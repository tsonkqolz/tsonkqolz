import { readFile } from "fs";
import { createServer } from "http";

createServer((req, res) => {
    let url = new URL('http://' + req.headers.host + req.url)
    let file = './public' + url.pathname
    if (file === './public/') {
        file = './public/index.html'
    }
    readFile(file, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.write('404 Not Found')
            res.end()
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        }
    })
}).listen(8080)