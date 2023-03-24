import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Video from './components/Video'
import Aulas from './components/Aulas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>

    <Video/>
    
    <Aulas/>
  </React.StrictMode>
)
