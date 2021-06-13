//import http from 'http';
//import * as usedCar from "./data.js";
//import qs from "querystring";
import express from 'express';
import handlebars from 'express-handlebars';
import { usedCar } from "./models/usedcar.js";
import cors from 'cors';


const app = express();
const port = 3000;

app.use('/api', cors());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', handlebars({defaultLayout: "main.handlebars"}));
app.set("view engine", "handlebars");


app.get("/", (req, res) => {
  usedCar.find().lean()
    .then((usedCars) => {
      //res.render("home", { usedCars });
      res.render('home', {usedCars:JSON.stringify(usedCars)});
      console.log(usedCars);
    })
    .catch((err) => next(err));
});

app.get('/about', (req,res) => {
  res.set("Content-Type", "text/plain");
  res.send('Hello, my name is Hongbin');
})

app.get("/detail", (req, res) => {
  usedCar.findOne({ brand: req.query.brand })
    .lean()
    .then((result) => {
      res.render("detail", { title: req.query.brand, usedCar:result});
      console.log(req.query);
    })
    .catch((err) => next(err));
});

app.get('/delete', (req,res) => {
  usedCar.deleteOne({brand :req.query.brand }, (err, result) => {
      if (err) return next(err);
      res.render("deleted",{title: req.query.brand, usedCar:result});
      console.log(result);
  });
});

//api

app.get('/api/usedCars', (req,res) => {
  usedCar.find({}).lean().then((usedCars) => {
    if (usedCars) {
    res.json(usedCars)
    } else {
      return res.status(500).send('Database Error occurred');
    }
  })
  .catch(err => next(err));
});

app.get("/api/usedCars/detail/:brand", (req, res) => {
  usedCar.findOne({ brand: req.params.brand })
    .lean()
    .then((result) => {
      if (result) {
      res.json(result)
    } else {
      return res.status(500).send('Database Error occurred');
    }
    })
    .catch((err) => next(err));
});

app.get('/api/usedCars/delete/:id', (req,res) => {
  usedCar.deleteOne({"_id": req.params.id }, (err, result) => {
      if (err) return next(err);
      res.json(result)
  });
});

app.post('/api/usedCars/add/', (req,res, next) => {
  console.log(req.body)
  if (!req.body._id) {

      let addCar = new usedCar({brand:req.body.brand,year:req.body.year,color:req.body.color, price:req.body.price});
      addCar.save((err,result) => {
          if (err) return next(err);
          console.log(result)
          res.json({updated: 0, _id: result._id});
      });
  } else {
      usedCar.updateOne({ _id: req.body._id}, {brand:req.body.brand,year:req.body.year,color:req.body.color, price:req.body.price}, (err, result) => {
          if (err) return next(err);
          res.json({updated: result.nModified, _id: req.body._id});
      });
  }
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