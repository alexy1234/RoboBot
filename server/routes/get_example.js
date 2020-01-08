/** Example API for fetching data from TestModel
  */
var express = require('express');
var router = express.Router();
var Database = require("../model/database");


/* GET TestModel Contents */
router.get('/', function(req, res, next) {
  result = []
  Database.TestModel.find().then((result) => {
  	res.send(result);
  }).catch((e) => {
  	console.log(e);
  	console.log("Fetch data from TestModel FAILED!");
  })
});

module.exports = router;
