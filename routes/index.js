var express = require('express');
var router;
router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '미니' });
});

module.exports = router;
