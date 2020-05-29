require('dotenv').config()

module.exports = {
  dev: {
    client: 'mssql',
    connection: {
      host: process.env.KNEX_HOST,
      port: Number(process.env.KNEX_PORT),
      user: process.env.KNEX_USER,
      password: process.env.KNEX_PASS,
      database: process.env.KNEX_DB
    }
  }
}