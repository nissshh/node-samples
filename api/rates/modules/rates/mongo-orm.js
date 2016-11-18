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




//Add some methods.
//rateSchema.methods.say = function () {
//    console.log("This is schema method for", this);
//}

//compiles schema in to rates model for other to creat instances of
// DEfines a class kind and a factory
var RateSingleton = (function(){
    //this is a class
    // create a schema
    var rateSchema =  mongoose.Schema({
        ccy: String,
        xccy: String,
        rate: Number,
        xrate: Number,
        margin: Number
    });

    var Rate = mongoose.model('Rates', rateSchema);

    return {
        getInstance: function(){
            return Rate;
        }
    }
});


module.exports.getRateModel = RateSingleton;