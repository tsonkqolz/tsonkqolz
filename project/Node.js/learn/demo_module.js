import http from 'http';
import { myDateTime } from './myFirstModule.js';

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(`It's ${myDateTime()} now.`)
    res.end()
}).listen(8080)