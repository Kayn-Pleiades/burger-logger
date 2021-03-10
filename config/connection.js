// Required package
const mysql = require('mysql');

// Create connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '5tRab3RRy3.14',
    database: 'burgers_db'
});
  
module.exports = connection;