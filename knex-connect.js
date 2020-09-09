require('dotenv').config()

module.exports = {
  jct: {
    client: 'mssql',
    connection: {
      host: process.env.KNEX_HOST,
      port: Number(process.env.KNEX_PORT),
      user: process.env.KNEX_USER,
      password: process.env.KNEX_PASS,
      database: process.env.KNEX_JCT_DB
    }
  },
  
  mammoth: {
    client: 'mssql',
    connection: {
      host: process.env.KNEX_HOST,
      port: Number(process.env.KNEX_PORT),
      user: process.env.KNEX_USER,
      password: process.env.KNEX_PASS,
      database: process.env.KNEX_MAMMOTH_DB
    }
  },

  maverick: {
    client: 'mssql',
    connection: {
      host: process.env.KNEX_HOST,
      port: Number(process.env.KNEX_PORT),
      user: process.env.KNEX_USER,
      password: process.env.KNEX_PASS,
      database: process.env.KNEX_MAVERICK_DB
    }
  },
 
  reinpusher: {
    client: 'mssql',
    connection: {
      host: process.env.KNEX_HOST,
      port: Number(process.env.KNEX_PORT),
      user: process.env.KNEX_USER,
      password: process.env.KNEX_PASS,
      database: process.env.KNEX_REINPUSHER_DB
    }
  },
 
}