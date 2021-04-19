const http = require("http");
const data = require("./data");
const querystring = require("querystring");
const server = http.createServer((req, res) => {
  var path = req.url.toLowerCase();
  switch (path[0]) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(JSON.stringify(data.getAll(), null, 1));
      break;
      case "/detail":
        let param = querystring.parse(path[1]);
        res.end(JSON.stringify(data.getItem(param.brand), null, 1));
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