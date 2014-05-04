var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('content/home', {
    title:       'BrianDillard.com',
    description: 'The personal website of Chicago-based software engineer Brian J. Dillard'
  });
});

router.get('/bio', function(req, res) {
  res.render('content/bio', {
    title:       'Bio',
    description: 'The secret origin of Chicago-based software engineer Brian J. Dillard'
  });
});

module.exports = router;
