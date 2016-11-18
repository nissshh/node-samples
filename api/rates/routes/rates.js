//Handles rates paths.
var express = require('express');
var router = express.Router();
var dao = require('../modules/rates/dao.js')
var mongoorm = require('../modules/rates/mongo-orm.js')
//get rate model here
var Rate = mongoorm.getRateModel().getInstance();


/* GET rates */
router.get('/', function (req, res, next) {
  res.setHeader('content-type', 'application/json');
  var query = Rate.find();
  query.exec(function (err, rates) {
    if (err) {
      console.log(err);
    } else {
      res.json(rates);
      res.end();
    }
  });
  
});

/* GET rates listing. from sell ccy to get xccy  */
router.get('/:ccy/to/:xccy', function (req, res, next) {
  var query = Rate.find({ 'ccy': ':ccy', 'xccy': ':xccy' });
  res.setHeader('content-type', 'application/json');
  query.exec(function (err, rates) {
    if (err) {
      console.log(err);
    } else {
      res.json(rates);
      res.end();
    }
  });
  
});

  /** POST new rate */
  router.post('/', function (req, res, next) {
    res.setHeader('content-type', 'application/json');
    var newRate = new Rate(req.body);
    newRate.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Saved Rate');
      }
    });
    res.end();
  });

  module.exports = router;
