var OrientDB = require('orientjs');

var server = OrientDB ({
    host: 'localhost',
    port: 2424,
    username: 'root',
    password: '1234'
});

var db = server.use('mini');

/*

db.record.get('#21:0')
    .then(function (record) {
        console.log('가져온거'+record);
    });
*/
/*var sql = 'SELECT FROM topic WHERE @rid=:rid';
var param = {
    params:{
        rid:'#21:0'
    }
};*/
/*
var sql = 'INSERT INTO topic (title,description) VALUES (:title,:desc)'
var param = {
    params:{
        title:'익스프레스',
        desc:'넘나 좋은거'
    }
};

db.query('select from topic').then(function(result){
   console.log(result);
});*/

module.exports = db;