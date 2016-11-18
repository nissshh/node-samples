//defines & Loads the rates model 
var mongoose = require('mongoose');
var mongo_orm = require('./mongo-orm.js');

/**start to connect to mongoose - mongodb */
mongoose.connect('mongodb://localhost/test');

/**Connect to the database */
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("Connection successfull!");
});

/**set UP ORM her */
// define a schema
var rateSchemaDef = {
    ccy: String,
    xccy: String,
    rate: Number,
    xrate: Number,
    margin: Number
};

// create a schema
var rateSchema =  mongoose.Schema(rateSchemaDef);

//Add some methods.
rateSchema.methods.say = function () {
    console.log("This is schema method for", this);
}

//compiles schema in to rates model for other to creat instances of
var Rate = mongoose.model('Rates', rateSchema);

module.exports = Rate;