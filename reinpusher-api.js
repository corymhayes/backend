
const sealyModel = require('./models/reinpusher/sealy')

module.exports = (router, knex) => {
  const sealy = sealyModel.bindKnex(knex)
  
  router.get('/reinpusher/sealy', async ctx => {
    const levels = await sealy.query()
    const trend = await knex.raw(`SELECT * FROM SealyTrend WHERE mDate = '${ctx.query.date}' ORDER BY mTime ASC`)

    ctx.body = { levels: levels, trend: trend }
  })
}
