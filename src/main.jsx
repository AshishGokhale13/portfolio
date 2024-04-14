import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  {BrowserRouter, BrowserRouter as Router}from 'react-router-dom';
import './assets/css/index.css'
import './assets/css/fonts.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
)
