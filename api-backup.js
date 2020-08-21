const Company = require('./models/company')
const FieldTrend = require('./models/field-trend')
const University = require('./models/mammoth/university')
const CEHModel = require('./models/mammoth/ceh')
const MPC = require('./models/mpc')
// const JCTBTY = require('./models/jctbty')
const BTYModel = require('./models/bty')
const UserModel = require('./models/userModel')



module.exports = (router, jct, mammoth) => {

  const BTY = BTYModel.bindKnex(jct)
  const CEH = CEHModel.bindKnex(mammoth)
  
  router.get('/:company', async ctx => {
    const comp = await Company.query().select('BATTERY').where('COMPANY', '=', ctx.params.company)
    ctx.body = comp
  })
  
  router.get('/jct/bty', async ctx => {
    const comp = await JCTBTY.query()
    ctx.body = comp
  })
  
  router.get('/jct/jctbty', async ctx => {
    const comp = await BTY.query()
    ctx.body = comp
  })

  router.put('/jct/jctbty', async ctx => {
    const req = await ctx.request.body

    for (const prop in req){
      await knex.raw(`UPDATE JCTBTY SET ${prop} = ${req[prop]}`)
    }

    ctx.body = ctx.status 
  })
  


  router.put('/jct/bty', async ctx => {
    const req = await ctx.request.body
    const rows = await knex.raw(`UPDATE JCT_TEST_BTY SET ${Object.keys(req)} = ${Object.values(req)}`)
    console.log(rows);
  })



  router.get('/mammoth/university', async ctx => {
    const comp = await University.query()
    ctx.body = comp
  })
  
  
  // router.get('/mammoth/ceh', async ctx => {
  //   const comp = await CEH.query()
  //   ctx.body = comp
  // })
  
  router.get('/mammoth/mpc', async ctx => {
    const comp = await MPC.query()
    ctx.body = comp
  })
  
  
  router.get('/', async ctx => {
    const comp = await UserModel.query()
    ctx.body = comp
  })

  router.post('/users/test', async ctx => {
    const req = ctx.request.body
    console.log(req);
    
    ctx.body = await UserModel.query().patch({ 
      v1: `${req.v1}`,
      v2: `${req.v2}`
    })
  })

}