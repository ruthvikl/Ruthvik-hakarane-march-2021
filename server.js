var express = require('express');
var app = express();
const path = require("path")
var fs = require("fs");
app.get('/', function (req, res) {
   fs.readFile( __dirname + "/" + "info.json", 'utf8', function (err, data) {
    //   console.log( data );
      res.end( data );
   });
})

// app.get('/projects', function (req, res) {
//    fs.readFile( __dirname + "/" + "projects.json", 'utf8', function (err, data) {
//       console.log( data );
//       res.end( data );
//    });
// })

// app.get('/', function (req, res){
   
// })
// set view engine
app.set("view engine","ejs")
// app.set("views", path.resolve(__dirname,"views/ejs"))  if front end files placed inside views folder inside ejs folder

//loading assets like css js
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
// app.use('/img', express.static(path.resolve(__dirname, "assets/img")))  if u have images in the module 
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))



app.listen(8000, ()=> { 
   console.log(`Server is running @ ${8000}`)
});