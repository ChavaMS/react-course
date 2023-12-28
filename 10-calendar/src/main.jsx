import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store';
import { Provider } from "react-redux";
import { CalendarApp } from './CalendarApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <CalendarApp />
  </Provider>
  // </React.StrictMode>,
)
