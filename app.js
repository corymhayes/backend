const Koa = require('koa')
const KoaRouter = require('@koa/router')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const router = new KoaRouter()
const app = new Koa()

const Knex = require('knex')
const knexConnect = require('./knex-connect')
const { Model } = require('objection')

const jctApi = require('./jct-api')
const mammothApi = require('./mammoth-api')
const maverickApi = require('./maverick-api')

const jct = Knex(knexConnect.jct)
const mammoth = Knex(knexConnect.mammoth)
const maverick = Knex(knexConnect.maverick)

Model.knex(jct)
Model.knex(mammoth)
Model.knex(maverick)


jctApi(router, jct)
mammothApi(router, mammoth)
maverickApi(router, maverick)


app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3030)