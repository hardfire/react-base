import koa from 'koa'
import koaLogger from 'koa-logger'
import serve from 'koa-static'
import handlebars from 'koa-handlebars'

import routes from './routes/routes'

const app = koa()

app
  .use(koaLogger())
  .use(serve('public', { /*maxage: 31556952000 */}))
  .use(handlebars({ root: __dirname }));

app
  .use(routes.routes())
  .use(routes.allowedMethods());

app.listen(3000)
