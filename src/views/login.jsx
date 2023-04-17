import React from 'react'
import backgroud from '../images/Banner_Principal.png'
import styles from './Login.module.css'

const Login = () => {
  return (
    <div className={styles.page}>
      <img src={backgroud} className={styles.img}></img>
      <div className={styles.component}>Login</div>
        <form className={styles.form}>
          <div>
            <input type="text" placeholder="Usuário" />
          </div>
          <div>
            <input type="password" placeholder="Digite sua senha" />
          </div>
          <div>
            <input type="submit" value="Entrar" />
          </div>
        </form>
    </div>
  )
}

export default Login