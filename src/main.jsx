import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Video from './components/Video'
import Aulas from './components/Aulas'
import Professores from './components/Professores'
import Endereco from './components/Endereco'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Video/>
    <Aulas/>
    <Professores />
    <Endereco />
    <Footer />
  </React.StrictMode>
)
