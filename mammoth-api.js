const hudsonModel = require('./models/mammoth/hudson')
const hudsonSettingsModel = require('./models/mammoth/hudsonSettings')
const hudsonTrendModel = require('./models/mammoth/hudsonTrend')

const marypriceModel = require('./models/mammoth/maryprice')
const marypriceSettingsModel = require('./models/mammoth/marypriceSettings')

const quantumModel = require('./models/mammoth/quantum')
const quantumSettingsModel = require('./models/mammoth/quantumSettings')

const universityModel = require('./models/mammoth/university')
const universitySettingsModel = require('./models/mammoth/universitySettings')
const universityTrendModel = require('./models/mammoth/universityTrend')


module.exports = (router, knex) => {

  const hudson = hudsonModel.bindKnex(knex)
  const hudsonSettings = hudsonSettingsModel.bindKnex(knex)
  const hudsonTrend = hudsonTrendModel.bindKnex(knex)

  const maryprice = marypriceModel.bindKnex(knex)
  const marypriceSettings = marypriceSettingsModel.bindKnex(knex)
  
  const quantum = quantumModel.bindKnex(knex)
  const quantumSettings = quantumSettingsModel.bindKnex(knex)

  const university = universityModel.bindKnex(knex)
  const universitySettings = universitySettingsModel.bindKnex(knex)
  const universityTrend = universityTrendModel.bindKnex(knex)
  

  router.get('/mammoth/hudson', async ctx => {
    const levels = await hudson.query()
    const settings = await hudsonSettings.query()
    const trend = await knex.raw(`SELECT * FROM HudsonTrend WHERE mDate = '${ctx.query.date}' ORDER BY mTime ASC`)

    const comp = { levels: levels, settings: settings, trend: trend }

    ctx.body = comp
  })
  
  router.get('/mammoth/maryprice', async ctx => {
    const levels = await maryprice.query()
    const settings = await marypriceSettings.query()

    ctx.body = { data: levels, settings: settings }
  })

  router.get('/mammoth/quantum', async ctx => {
    const levels = await quantum.query()
    const settings = await quantumSettings.query()
    const trend = await knex.raw(`SELECT * FROM QuantumTrend WHERE mDate = '${ctx.query.date}' ORDER BY mTime ASC`)

    const comp = { levels: levels, settings: settings, trend: trend }

    ctx.body = comp
  })

  router.get('/mammoth/university', async ctx => {
    const levels = await university.query()
    const settings = await universitySettings.query()
    const trend = await knex.raw(`SELECT * FROM UniversityTrend WHERE mDate = '${ctx.query.date}' ORDER BY mTime ASC`)

    const comp = { levels: levels, settings: settings, trend: trend }

    ctx.body = comp
  })
}