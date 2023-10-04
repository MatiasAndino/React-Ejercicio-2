import React from 'react'
import ReactDOM from 'react-dom/client'
// import HockApp from './HockApp.jsx'
// import {CounterApp} from './components/01-useState/CounterApp'
import {CounterWithCustomHook} from './components/01-useState/CounterWithCustomHook'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HockApp /> */}
    {/* <CounterApp /> */}
    <CounterWithCustomHook />
  </React.StrictMode>,
)
