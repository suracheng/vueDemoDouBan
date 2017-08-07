
let express= require('express');
let app = express();
let request = require('superagent');
let HOST = 'https://api.douban.com/v2';
let path = require("path");

/**
 * CORS support
 */
app.all('*', function (req, res, next) {
  if (!req.get('Origin')) return next();
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  if ('OPTIONS' === req.method) {
      res.send(200);
  }
  next();
});

app.use(express.static(path.resolve("dist")));

let sreq;
app.use(function (req, res, next) {
  // req.originalUrl 原始请求路径   ／movie/in_theaters?start=0&count=9    /movie/coming_soon?start=0&count=9
  sreq = request.get(HOST + req.originalUrl);
  next();
});

app.get('/movie/:type', function (req, res) {
    sreq.pipe(res);
});

app.get('/movie/subject/:id', function (req, res) {
    sreq.pipe(res);
});


app.get('/movie/search/:id', function (req, res) {
    sreq.pipe(res);
});

app.listen(8082, function () {
  console.log('HTTP Server is running in http://127.0.0.1:8082');
});
