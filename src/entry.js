import 'autotrack/lib/plugins/outbound-link-tracker'
import 'autotrack/lib/plugins/url-change-tracker'
import 'babel-polyfill'
import 'element-closest'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import routes from './routes'
import configureStore from './store'

import '../sass/app.scss'

const preloadedState = window.__STATE__
delete window.__STATE__

const store = configureStore(preloadedState)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>{routes}</Provider>,
    document.getElementById('app'),
  )
}

if (window && window.localStorage && process.env.NODE_ENV === 'production') {
  window.localStorage.clear()
}

render()
store.subscribe(render)
