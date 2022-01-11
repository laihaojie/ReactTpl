import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import RouteComponent from "./router"
import { Provider } from "react-redux"
import store from './store'



ReactDOM.render(
  <Provider store={store}>
    <RouteComponent />
  </Provider>
  ,
  document.getElementById('root')
)
