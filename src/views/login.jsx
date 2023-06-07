import { useState, useContext, } from 'react'
import React from 'react'
import backgroud from '../images/banner_login.png'
import logo from '../images/Logo.png'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  
  //setamos o useState para pegar os dados e armazenar nas variáveis "set"
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  //Faz com que o submit não recarregue a página e perca os dados
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8001/explosao-service/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName: username, password })
      })
  
      const data = await response.json()
      
      if (response.ok) {
        console.log('login bem sucedido')
        const token = data.additionalInfo.jwtToken
        localStorage.setItem('token', token)
        setUsername(data.additionalInfo.username)
        navigate('/admin/dashboard')
      } else {
        console.log('login falhou')
      }
  
    } catch (error) {
      console.error('erro ao tentar fazer login', error)
    }
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
              value={username} 
              onChange={(e) => setUsername(e.target.value)}/>
            <input 
              type="password" 
              placeholder="Senha" 
              id='password' 
              name='password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
            <input className={styles.button} type="submit" value="Entrar"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login