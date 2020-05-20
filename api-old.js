const Company = require('./models/company')
const Sites = require('./models/sites')
const ChildSite = require('./models/child-site')
const Equipment = require('./models/equipment')
const FieldTrend = require('./models/field-trend')
const University = require('./models/university')
const CEH = require('./models/ceh')

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
      

  router.get('/api', async ctx => {
    const comp = await Company.query()
    ctx.body = comp
  })


  /*  RETURNS A LIST OF ALL THE SITES UNDERNEATH THE COMPANY  */
  router.get('/api/:company/', async ctx => {
    let siteId = await Company.query().select('id').where('slug', ctx.params.company)
    siteId = siteId[0].id

    let dh = await Company.relatedQuery('parents').for(siteId)

    ctx.body = dh
  })

  
  /*  RETURNS A LIST OF ALL THE EQUIPMENT FROM THE SPECIFIED SITE  */
  router.get('/api/:company/:site/', async ctx => {
    let companyId = await Company.query().select('id').where('slug', ctx.params.company)
    companyId = companyId[0].id

    let siteId = await Company.relatedQuery('parents').for(companyId).select('id', 'name').where('slug', ctx.params.site)
    siteIdNum = siteId[0].id
    siteName = siteId[0].name

    let equip = await Equipment.query().where('site_id', siteIdNum)


    ctx.body = [siteName, equip]
  })
}