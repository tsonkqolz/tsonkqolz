import http from 'http';
import fs from 'fs';

http.createServer((req, res) => {
    fs.readFile('./demofile1.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(typeof data)
        res.end();
    })
})