import http from 'http';
import url from 'url';

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    let q = url.parse(req.url, true).query
    // query type is object
    res.write(JSON.stringify(q))
    res.end()
}).listen(8080)