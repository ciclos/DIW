var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Express' });
});

router.get('/alternativo', function(req, res, next) {
  res.render('layout_alternativo', { title: 'Express' });
});

module.exports = router;
