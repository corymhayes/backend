const Koa = require('koa')
const KoaRouter = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

const Knex = require('knex')
const knexConnect = require('./knex-connect');
const registerApi = require('./api')
const { Model } = require('objection')

const knex = Knex(knexConnect.dev)
Model.knex(knex);

const router = new KoaRouter()
const app = new Koa()

registerApi(router)

app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3001)