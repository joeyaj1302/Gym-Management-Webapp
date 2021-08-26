const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'newuser',
    password: 'password',
    database: 'practisedb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

module.exports = pool;