// -- react
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router'

import routes from './routes/react-routes'

// -- redux components
import configureStore from './redux/configureStore'

// -- bootstrap redux states
const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)

// -- render the application
ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('container')
)
