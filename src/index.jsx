import React from 'react'
import { render } from 'react-dom'
import { App } from './component/app'
import './index.css'
import store from './store'


import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux'

const here = document.getElementById('app')

const app =<Provider store={store}>
<App/> </Provider>

render(app, here)

