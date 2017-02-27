/**
 * Created by kimkm on 2017-01-24.
 */
var express = require('express');
var router = express.Router();
var db = require('../db/db_orientdb');

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function(req, res, next) {

    db.query('select from topic').then(function(result){
        console.log(result);
        res.render('topic/list',{title:'미니 메렁',data:result});
    });

});

router.get('/:rid', function(req, res, next) {

    db.query('select from topic where @rid=:rid',{params:{rid:req.params.rid}}).then(function(result){
        console.log(result);
        res.render('topic/view',{title:'미니 메렁',data:result[0]});
    });

});

router.post('/', function(req, res){

});

module.exports = router;