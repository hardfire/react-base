// -- koa routes
import koaRouter from 'koa-router'
const routes = koaRouter()

// -- react server side rendering
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { initialState, reducer } from '../redux/reducers'
import reactRoutes from './react-routes'

// could as well come from a Store/API
const bookmarks = [
  { key: 'google-web-updates' , url: 'https://developers.google.com/web/updates/', title: 'Google Web Updates'},
  { key: 'moz-hacks' , url: 'https://hacks.mozilla.org/', title: 'Mozilla Hacks'}
]

routes.get('/', function*(next) {
  const {redirect, props} = yield matchPromise({ routes: reactRoutes, location: this.request.path })
  const preloadedState = Object.assign({}, initialState, { bookmarks })
  const store = createStore(reducer, preloadedState)
  const html = renderToString( <Provider store={store}><RouterContext {...props}/></Provider> )

  // Grab the initial state from our Redux store
  const finalState = store.getState()
  yield this.render("main", {
    html: html.toString(),
    preloadedState: JSON.stringify(preloadedState)
  })
})

/* convert react-router match to a promise */
const matchPromise = (options) => new Promise((resolve, reject) => {
  match(options, (err, redirect, props) => {
    if(err) reject(err)
    resolve({redirect, props})
  })
})

export default routes
