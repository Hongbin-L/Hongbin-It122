const http = require("http");
const server = http.createServer((req, res) => {
  var path = req.url.toLowerCase();
  switch (path) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home page");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`About page\n\rHello, my name is Hongbin`);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
      break;
  }
});
server.listen(3000);