const { Model } = require('objection')
const Knex = require('knex')

const knex = Knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: '8224032321',
    database: 'nodemysql2',
    port: 5432,
  },
})

Model.knex(knex)

module.exports = knex
