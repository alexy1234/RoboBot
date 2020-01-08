//TODO: Spawn docker instance

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('post_example', { title: 'TODO: Spawning Docker Instance' });
});

/**
    TODO: Spawn Docker Instance
*/
router.post('/', function(req, res, next) {
  const body = req.body;

  // Logging
  console.log(req.body); 
});

module.exports = router;
