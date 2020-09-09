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
const jct = Knex(knexConnect.jct)
Model.knex(jct)
jctApi(router, jct)

const mammothApi = require('./mammoth-api')
const mammoth = Knex(knexConnect.mammoth)
Model.knex(mammoth)
mammothApi(router, mammoth)

const maverickApi = require('./maverick-api')
const maverick = Knex(knexConnect.maverick)
Model.knex(maverick)
maverickApi(router, maverick)


  const reinpusherApi = require('./reinpusher-api')
  const reinpusher = Knex(knexConnect.reinpusher)
  Model.knex(reinpusher)
  reinpusherApi(router, reinpusher)


app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3030)