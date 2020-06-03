const Company = require('./models/company')
const FieldTrend = require('./models/field-trend')
const University = require('./models/university')
const CEH = require('./models/ceh')
const MPC = require('./models/mpc')
const JCTBTY = require('./models/jctbty')
const UserModel = require('./models/userModel')

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