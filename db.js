//added comment by suresh
var mysql = require('mysql');
var connection = mysql.createConnection({

host : "localhost",
user:"root",
password:"",
database:"preorder"
        
});
 
 connection.connect(function(err){
if (err) throw err;

console.log("connected");
});
module.exports = connection;
