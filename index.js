//import http from 'http';
import * as usedCar from "./data.js";
//import qs from "querystring";
import express from 'express';
import handlebars from 'express-handlebars';


const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true} ));
app.use(express.json());

app.engine('handlebars', handlebars({defaultLayout: "main.handlebars"}));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home", { usedCars : usedCar.getAll() });
});

app.get('/about', (req,res) => {
  res.set("Content-Type", "text/plain");
  res.send('Hello, my name is Hongbin');
})

app.get('/detail', (req,res) => {
  let result = usedCar.getItem(req.query.brand);
  res.render("detail", {title: req.query.brand, usedCar:result});
  console.log(result)
});

app.listen(port);




/*http.createServer((req, res) => {
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
      res.end('About page\n\rHello, my name is Hongbin');
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
      break;
  }
})
.listen(process.env.PORT || 3000); */