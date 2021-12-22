const mysql = require('mysql')
const util = require('util')
require('dotenv').config();

const config = {
    database: process.env["MYSQL_DATABASE"],
    user: process.env["MYSQL_USERNAME"],
    password: process.env["MYSQL_PASSWORD"],
    host: process.env["MYSQL_HOST"],
    port: process.env["MYSQL_PORT"],
    connectionLimit: 1000,
    connectTimeout: 60 * 60 * 1000,
    acquireTimeout: 60 * 60 * 1000,
    timeout: 60 * 60 * 1000,
    multipleStatements: true,
}
const pool = mysql.createPool(config)
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release();
    return;
})
pool.query = util.promisify(pool.query);
module.exports = pool;
