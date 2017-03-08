/**
 * Created by kimkm on 2017-03-06.
 */
// get mongoose package
var mongoose = require('mongoose');

// connect to MongoDB / the name of DB is set to 'myDB'
mongoose.connect('mongodb://118.38.19.37:33000/myDB');

// we get the pending connection to myDB running on localhost
var db = mongoose.connection;
// we get notified if error occurs
db.on('error', console.error.bind(console, 'connection error:'));
// executed when the connection opens
db.once('open', function callback () {
    // add your code here when opening
    console.log("open");
});

// creates DB schema
var userSchema = mongoose.Schema({
    username: 'string',
    age: 'number'
});

// compiels our schema into a model
var User = mongoose.model('User', userSchema);

// add user1 and user2 to "User" model
var user1 = new User({ username: 'gchoi', age: 30 });
var user2 = new User({ username: 'jmpark', age: 29 });

// save user1
user1.save(function (err, user1) {
    if (err) // TODO handle the error
        console.log("error");
});

// save user2
user2.save(function (err, user2) {
    if (err) // TODO handle the error
        console.log("error");
});