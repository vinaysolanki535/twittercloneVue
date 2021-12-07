const Pool = require('pg').Pool

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '8224032321',
  database: 'nodemysql2',
  port: 5432,
})

module.exports = pool
