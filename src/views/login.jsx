import { useState } from 'react'

import React from 'react'
import backgroud from '../images/banner_login.png'
import logo from '../images/Logo.png'
import styles from './Login.module.css'
import api from '../services/api'


const Login = () => {

  

  //setamos o useState para pegar os dados e armazenar nas variáveis "set"
  const [user, setUser] = useState("")
  const [senha, setSenha] = useState("")

  //Faz com que o submit não recarregue a página e perca os dados
  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('submitei', { user, senha })
  }

  return (
    <div className={styles.page}>
      <img src={backgroud} className={styles.img}></img>
      <img src={logo} className={styles.logo}></img>
      <div className={styles.base}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}> 
            <input 
              type="text" 
              id='user' 
              name='user' 
              placeholder="Usuário" 
              value={user} 
              onChange={(e) => setUser(e.target.value)}/>
            <input 
              type="password" 
              placeholder="Senha" 
              id='password' 
              name='password' 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}  
            />
            <input className={styles.button} type="submit" value="Entrar" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login