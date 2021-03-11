var express = require('express');
var app = express();
const path = require("path")
var fs = require("fs");
var PORT = process.env.PORT || 3000;

app.locals.users = require('./info.json')
app.locals.project = require('./projects.json')
app.get('/info', function (req, res) {
   fs.readFile( __dirname + "/" + "info.json", 'utf8', function (err, data) {
      res.end( data );
   });
})

app.get('/projects', function (req, res) {
   fs.readFile( __dirname + "/" + "projects.json", 'utf8', function (err, data) {
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

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))   
// app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.listen(PORT, ()=> { 
   console.log(`Server is running @ ${PORT}`)
});