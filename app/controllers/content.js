var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('content/home', {
    title:       'BrianDillard.com',
    description: 'The personal website of Chicago-based software engineer Brian J. Dillard'
  });
});

module.exports = router;
