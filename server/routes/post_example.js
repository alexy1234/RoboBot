/** Example API to POST data to database
  */ 
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('post_example', { title: 'Express' });
});

var Database = require("../model/database");

/**
    Route demonstrating POST operation
    @name get/post_example
*/
router.post('/', function(req, res, next) {
  const body = req.body;

  // Logging
  console.log("request body: ", req.body);

  // Create data model instance with request body
  var TestData = new Database.TestModel({
    name: req.body.name
  });

  // Save data instance into database
  TestData.save().then(() => {
    console.log("Data successfully posted to database")
    res.status(200).json({
        message: "Request body POST-ed",
        request_body: req.body
    });
  }).catch(() => {
    console.log("Data save failed");
  });
});

module.exports = router;
