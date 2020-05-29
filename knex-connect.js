require('dotenv').config()

module.exports = {
  dev: {
    client: 'mssql',
    connection: {
<<<<<<< HEAD
      host: '72.24.228.86',
      port: 49170,
      user: 'tadmin',
      password: 'test3698',
      database: 'JCTDATA'
=======
      host: process.env.KNEX_HOST,
      port: Number(process.env.KNEX_PORT),
      user: process.env.KNEX_USER,
      password: process.env.KNEX_PASS,
      database: process.env.KNEX_DB
>>>>>>> 003e28d1729d1e1fcf3c2ea610becce95cc79749
    }
  }
}