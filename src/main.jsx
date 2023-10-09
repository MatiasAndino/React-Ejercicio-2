import React from 'react'
import ReactDOM from 'react-dom/client'
// import HockApp from './HockApp.jsx'
// import {CounterApp} from './components/01-useState/CounterApp'
// import {CounterWithCustomHook} from './components/01-useState/CounterWithCustomHook'
// import { SimpleForm } from './components/02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks'
// import { FocusScreen } from './components/04-useRef/FocusScreen'
// import { RealExampleRef } from './components/04-useRef/RealExampleRef'
import { ToDoApp } from './components/05-ToDo/ToDoApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HockApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/*<RealExampleRef />*/} {/*ESTA TAREA ESTA INCOMPLETA*/}
    <ToDoApp />
    
  </React.StrictMode>,
)
