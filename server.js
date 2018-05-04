// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

var multer = require('multer');
var upload = multer();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/upload', upload.single('file'), (request, response) => {
  response.json({
    fieldname: request.file.fieldname,
    originalname: request.file.originalname,
    encoding: request.file.encoding,
    mimetype: request.file.mimetype,
    size: request.file.size
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
