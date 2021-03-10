// Required package
const mysql = require('mysql');

// Create connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: password.mysql,
    database: 'burgers_db'
});
  
module.exports = connection;