var mongoose = require('mongoose');
var DB_USER = process.env.DB_USER;
var DB_PASS = process.env.DB_PASS;
var DB_HOST = process.env.DB_HOST;
var DB_NAME = process.env.DB_NAME;
var DB_PORT = process.env.DB_PORT;
var ENV = process.env.NODE_ENV || '';
if (DB_USER != 'null' && DB_PASS != 'null') {
    mongoose.connect('mongodb://' + DB_USER + ':' + DB_PASS + '@' + DB_HOST + ':' + DB_PORT + '/' + DB_NAME, { useNewUrlParser: true,useCreateIndex: true, } ,function (err) {
        if (err) {
            console.error('error while connecting to database', err);
            // exit app
            process.exit(1);
          }else{
            console.log("Connexion à la base de donnee")
          }
    });
} else {
    mongoose.connect('mongodb://' + DB_HOST + '/' + DB_NAME,{ useNewUrlParser: true ,useCreateIndex: true,}, function (err) {
        if (err) {
            console.error('error while connecting to database', err);
            // exit app
            process.exit(1);
        } else{
          console.log("Connexion à la base de donnee")
        }
        
    });
}

module.exports = mongoose;