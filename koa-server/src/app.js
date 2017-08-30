import Koa from 'koa'
import KoaRouter from 'koa-router'
import fetch from 'node-fetch'

import config from './config'


const bikeStationsUrl = apiKey =>
  `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=${apiKey}`

const getBikesData = async () => {
  const response = await fetch(bikeStationsUrl(config.apiKey))
  const data = await response.json()
  return data
}

const router = KoaRouter()

router.get('/', async (ctx, next) => {
  try {
    const data = await getBikesData()
    ctx.body = data
  }
  catch (e) {
    console.log(`ERROR CONNECTION TO BIKES API:\n ${e}`)
    ctx.body = 'ERROR'
  }
})

const app = new Koa()
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(config.port)
console.log(`Listening on port ${config.port}`)
