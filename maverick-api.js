const christopherModel = require('./models/maverick/christopher')
const christopherTrendModel = require('./models/maverick/christopherTrend')

module.exports = (router, knex) => {
  const christopher = christopherModel.bindKnex(knex)
  const christopherTrend = christopherTrendModel.bindKnex(knex)

  router.get('/maverick/christopher', async ctx => {
    const levels = await christopher.query()
    const trend = await knex.raw(`SELECT * FROM ChristopherTrend WHERE mDate = '${ctx.query.date}' ORDER BY mTime ASC`)

    const comp = { levels: levels, trend: trend }

    ctx.body = comp
  })
}