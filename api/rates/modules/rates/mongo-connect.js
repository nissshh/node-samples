//defines & Loads the rates model 
var mongoose = require('mongoose');

/**start to connect to mongoose - mongodb */
mongoose.connect('mongodb://localhost/test');

/**Connect to the database */
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("Connection successfull!");
});

var getDB = function (){
    
}