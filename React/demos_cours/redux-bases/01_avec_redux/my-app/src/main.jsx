import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux"
import './index.css'
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*
      Le Provider permet de donner l'accès au store au composant App
      ainsi qu'à tous ses composants enfants 
     */}
     <Provider store={store}>
      <App />
     </Provider>
  </React.StrictMode>,
)
