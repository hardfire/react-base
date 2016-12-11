import React from 'react'
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router'

// -- react components
import Application from '../components/Application'


const routes = (
  <Route path="/">
    <IndexRoute component={Application}/>
  </Route>
)

export default routes
