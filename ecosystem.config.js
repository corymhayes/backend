/* FOR USE WITH PM2 */

module.exports = {
  apps: [{
    name: "api",
    script: "./app.js",
    env: {
      "KNEX_HOST": "72.24.228.86",
      "KNEX_PORT": 49170,
      "KNEX_USER": "tadmin",
      "KNEX_PASS": "test3698",
      "KNEX_JCT_DB": "JCTDATA",
      "KNEX_MAMMOTH_DB": "MAMMOTH",
      "KNEX_MAVERICK_DB": "MAVERICK"
    }
  }]
}