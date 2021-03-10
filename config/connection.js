// Required package
const mysql = require('mysql');
var connection;

// Create connection to database
if (process.env.JAWSDB_URL) {
     const connection = mysql.createConnection(process.env.JAWSDB_URL);
  }
  else {
    const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '5tRab3RRy3.14',
    database: 'burgers_db'
    });
}

module.exports = connection;