require('dotenv').config();

const mysql = require('mysql2');  
const config = {
    host: process.env.HOST,
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || 'root',
    database: process.env.DATABASE || 'node_db'
};

const connection = mysql.createConnection(config);

module.exports = connection;
