import http from 'http';

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    let q = new URL(req.headers.host + req.url).searchParams
    // query type is object
    res.write(q.toString())
    res.end()
}).listen(8080)