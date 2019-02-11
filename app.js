var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//Body Parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//set static path
app.use(express.static(path.join(__dirname, 'public')))

//Middleware Example

// var logger = function(req, res, next){
//     console.log("Logging...")
//     next();
// }
// app.use(logger);

//View Engine
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

app.listen(3000, function(){
    console.log("Server started")
})

app.get('/', function(req, res){
    // res.render('index', {
    //     title: 'Customers'
    // });
})

