const { createPool } = require('mysql')
require('dotenv').config()

const db = createPool({
  port: process.env.DB_PORT,
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: "",
  database: process.env.DB_NAME,
  //connectionLimit: 10
});


module.exports = db