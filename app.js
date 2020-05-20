const Koa = require('koa')
const IO = require('koa-socket-2')
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
const io = new IO()

const Equipment = require('./models/equipment')

registerApi(router)

app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

io.attach(app)

io.on('connection', async socket => {
  let equip = await Equipment.query().where('site_id', 1)
  socket.emit('company', equip)

  const compTimer = setInterval(async () => {
    let equip = await Equipment.query().where('site_id', 1)
    socket.emit('company', equip)
  }, 1000)

  socket.on('disconnect', () => {
    clearInterval(compTimer)
    console.log('user left')
  })
})


app.listen(3001, () => {
  console.log('connected on port 3001');
})