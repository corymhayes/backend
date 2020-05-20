const University = require('./models/university')
const CEH = require('./models/ceh')
const JCTBTY = require('./models/jctbty')

module.exports = router => {
  /*  SHOULD RETURN A LIST OF ALL THE COMPANIES  */
  router.get('/api/university', async ctx => {
      const comp = await University.query().select()
      ctx.body = comp
  })

  router.get('/api/ceh', async ctx => {
    const comp = await CEH.query().select()
    ctx.body = comp
  })

  router.get('/api/jctbty', async ctx => {
    const comp = await JCTBTY.query().select()
    ctx.body = comp
  })
}