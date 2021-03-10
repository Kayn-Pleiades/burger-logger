// Required package
const mysql = require('mysql');

let port=process.env.PORT||3306
app.listen(port, () => {
    console.log(`App running on port ${port} `);
});

// Create connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: port,
    user: 'root',
    password: '5tRab3RRy3.14',
    database: 'burgers_db'
});
  
module.exports = connection;