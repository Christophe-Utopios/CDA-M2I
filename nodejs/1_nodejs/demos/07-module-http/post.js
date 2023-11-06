import http from "http";

const server = http.createServer((req, res) => {
  let body = [];
  req
    .on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      res.end(body);
    })
    .on("error", (err) => {
      console.log(err);
    });
});

server.listen(8080);
console.log("listening on port http://127.0.0.1:8080");
