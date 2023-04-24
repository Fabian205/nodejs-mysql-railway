const mysql = require("mysql2/promise");
const config = require("./config.js")

//const PORT = config.PORT;

const DB_HOST = config.db_host;
const DB_USER = config.DB_USER;
const DB_PASSWORD = config.DB_PASSWORD;
const DB_NAME = config.DB_NAME;
const DB_PORT = config.DB_PORT;

const pool = mysql.createPool(
  {
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database:DB_NAME
  }
)

module.exports = pool;