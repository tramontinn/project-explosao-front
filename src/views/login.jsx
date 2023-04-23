import React from 'react'
import backgroud from '../images/banner_login.png'
import logo from '../images/Logo.png'
import styles from './Login.module.css'

const Login = () => {
  return (
    <div className={styles.page}>
      <img src={backgroud} className={styles.img}></img>
      <img src={logo} className={styles.logo}></img>
      <div className={styles.base}>
        <form>
          <div className={styles.form}> 
            <input type="text" placeholder="Usuário" />
            <input type="password" placeholder="Senha" />
            <input className={styles.button} type="submit" value="Entrar" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login