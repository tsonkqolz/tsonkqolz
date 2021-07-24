import http from 'http';
import fs from 'fs';

http.createServer((req, res) => {
    const q = new URL('http://' + req.headers.host + req.url)
    const file = 'src/' + q.pathname
    console.log(q);
    fs.readFile(file, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.end('404 Error not Found')
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        }
    })
}).listen(8080)