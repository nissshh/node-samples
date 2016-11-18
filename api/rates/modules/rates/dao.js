//var mongo_orm = require('./mongo-orm.js');  //defines the connection,schema,model for rates per mongooose
var fs = require('fs');
//sources file data
function read_json_file() {
    var file = './data/rates.json';
    return fs.readFileSync(file);
}

//get alls
module.exports.list = function () {
    var json_result = JSON.parse(read_json_file());
    return JSON.stringify(json_result);
}
//get with query
module.exports.query = function (number) {
    var json_result = JSON.parse(read_json_file());
    var result = json_result.result;
    for (var i = 0; i < result.length; i++) {
        var contact = result[i];
        if (contact.primarycontactnumber == number) {
            return contact;
        }
    }
    return null;
}
//get key:value filder
module.exports.query_by_arg = function (arg, value) {
    var json_result = JSON.parse(read_json_file());
    var result = json_result.result;
    for (var i = 0; i < result.length; i++) {
        var contact = result[i];
        if (contact[arg] == value) {
            return contact;
        }
    }
    return null;
}
