import React from 'react'
import styles from './dashboard.module.css'
import logo from '../../images/Logo.png'

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.primaryButton}>
        <div className={styles.containerAlunos}>
          <div>Alunos matriculados</div>
          <p>323</p>
        </div>
          <button className={styles.adicionarTurma} ><p>Adicionar turma</p><img></img></button>
          <button className={styles.adicionarAluno}><p>Adicionar aluno</p></button>
      </div>
      <div className={styles.menu}>
        <img src={logo} className={styles.logo}></img>
        <button>Visão Geral</button>
        <button>Alunos</button>
        <button>Turmas</button>
      </div>
      <div className={styles.frame1}><p>Visão geral</p></div>
      <div className={styles.rectangle5}></div>
    </div>
  )
}

export default Dashboard