import http from 'http';

const server = http.createServer((req, res) => {
    const { method, url } = req;
    console.log(method); // 'GET'
    console.log(url); // '/'
    console.log(req.headers);
});

server.listen(8080);
console.log('listening on port http://127.0.0.1:8080');