var express = require('express');
var mongoose = require("../model/database.js");
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('post_example', { title: 'Express' });
});

/* POST submitted data */
var Database = require("../model/database");

router.post('/', function(req, res, next) {
  const body = req.body;

  console.log(req.body);
  console.log(req.body.data); 

  var TestData = new Database.TestModel({
  	name: req.body.data
  });

  TestData.save().then(() => {
  	console.log("Data successfully posted to database")
  	res.status(200).json({
	  	message: "Request body POST-ed",
	  	request_body: req.body
  	});
  })

  

});

module.exports = router;
