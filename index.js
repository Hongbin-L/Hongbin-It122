import http from 'http';
import * as data from "./data.js";
import qs from "querystring";

http.createServer((req, res) => {
  let path = req.url.split("?");
  switch (path[0]) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(JSON.stringify(data.getAll()));
      break;
      case "/detail":
        let query = qs.parse(path[1]);
        res.end(JSON.stringify(data.getItem(query.brand)));
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
})
.listen(process.env.PORT || 3000);