var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',{ title: '미니' });
});

router.post('/upload', function(req, res ,next) {
    res.end('업로드됨');
});


module.exports = router;
