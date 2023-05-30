import React from 'react'
import styles from './dashboard.module.css'
import logo from '../../images/Logo.png'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo}></img>
      <div className={styles.primaryButton}>
        <div className={styles.containerAlunos}>
          <div>Alunos matriculados</div>
          <p>323</p>
        </div>
          <button className={styles.adicionarTurma}>
            <Link to="AdicionarTurma"><p>Adicionar turma</p><img></img></Link>
          </button>
          <button className={styles.adicionarAluno}>
            <Link to="AdicionarAluno"><p>Adicionar aluno</p></Link>
          </button>
      </div>
      <div className={styles.menu}>
        <button name="visao-geral">Visão Geral</button>
        <button name="alunos">Alunos</button>
        <button name="turmas">Turmas</button>
      </div>
      <div className={styles.frame1}><p>Visão geral</p></div>
        <p className={styles.message}>Mensalidades atrasadas</p>
      <div className={styles.alunos}>
        <ul className={styles.barNames}>
          <p name="nome">Nome</p>
          <p name="idade">Idade</p>
          <p name="turma">Turmas</p>
          <p name="ultimo">Último pagamento</p>
          <p name="situacao">Situação</p>
          <li className={styles.listAlunos}></li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard