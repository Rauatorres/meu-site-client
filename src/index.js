import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'

import './index.css'

const container = document.querySelector('#root')

createRoot(container).render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
)
