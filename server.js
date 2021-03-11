var express = require('express');
var app = express();
const path = require("path")
var fs = require("fs");
const axios = require('axios');

app.locals.users = require('./info.json')
app.locals.project = require('./projects.json')
app.get('/info', function (req, res) {
   fs.readFile( __dirname + "/" + "info.json", 'utf8', function (err, data) {
    //   console.log( data );
      res.end( data );
   });
})

app.get('/projects', function (req, res) {
   fs.readFile( __dirname + "/" + "projects.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})
app.get('/', function (req, res){ 
    res.render("profile");
})

app.get('/project/', function (req, res){ 
    res.render("project");
})
// set view engine
app.set("view engine","ejs")
// app.set("views", path.resolve(__dirname,"views/ejs"))  if front end files placed inside views folder inside ejs folder

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))   
// app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.listen(8000, ()=> { 
   console.log(`Server is running @ ${8000}`)
});