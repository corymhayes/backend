const Company = require('./models/company')
const FieldTrend = require('./models/field-trend')
const University = require('./models/university')
const CEH = require('./models/ceh')
const MPC = require('./models/mpc')
const JCTBTY = require('./models/jctbty')

module.exports = router => {
  router.get('/:company', async ctx => {
    const comp = await Company.query().select('BATTERY').where('COMPANY', '=', ctx.params.company)
    ctx.body = comp
  })
  
  router.get('/mammoth/university', async ctx => {
    const comp = await University.query()
    ctx.body = comp
  })
  
  router.get('/mammoth/ceh', async ctx => {
    const comp = await CEH.query()
    ctx.body = comp
  })
  
  router.get('/mammoth/mpc', async ctx => {
    const comp = await MPC.query()
    ctx.body = comp
  })
  
  // router.get('/api/jct/jctbty', async ctx => {
  //   const comp = await JCTBTY.query()
  //   ctx.body = comp
  // })
}