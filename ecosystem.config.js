module.exports = {
  apps: [{
    name: "api",
    script: "./app.js",
    env: {
      "KNEX_HOST": "72.24.228.86",
      "KNEX_PORT": 49170,
      "KNEX_USER": "tadmin",
      "KNEX_PASS": "test3698",
      "KNEX_DB": "JCTDATA"
    }
  }]
}