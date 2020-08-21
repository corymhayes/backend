const batteryModel = require('./models/jct/battery')
const testbatteryModel = require('./models/jct/testbattery')


module.exports = (router, knex) => {
  const battery = batteryModel.bindKnex(knex)
  const testbattery = testbatteryModel.bindKnex(knex)

  router.put('/jct/battery', async ctx => {
    const req = await ctx.request.body
    console.log(req)
    ctx.body = ctx.status
  })
  
  router.get('/jct/battery', async ctx => {
    const comp = await battery.query()
    ctx.body = comp
  })
  
  router.get('/jct/testbattery', async ctx => {
    const comp = await testbattery.query()
    ctx.body = comp
  })
}