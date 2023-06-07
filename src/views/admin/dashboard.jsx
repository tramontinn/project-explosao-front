import React, { useEffect, useState} from 'react'
import styles from './dashboard.module.css'
import logo from '../../images/Logo.png'
import { Link } from 'react-router-dom'
import moment from 'moment'


const Dashboard = () => {
  const birthday = moment("2000-01-01T00:00:00Z")
  const idade = moment().diff(birthday, 'years')

  const [dados, setDados] = useState(null);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        throw new Error('Sem token!')
      }

      const headers = {
        Authorization: `Bearer ${token}`
      };

      const response = await fetch('http://localhost:8001/explosao-service/student/', { headers });
      const data = await response.json();
      setDados(data);

    } catch (error) {
      console.log('Erro ao buscar os dados', error)
    }
  };
  fetchData();
}, []);  

  if(!dados) {
    return <div>Carregando...</div>
  }

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
        </ul>
        <div>{dados.name}</div>
        {/* {dados.map((aluno) => (
          <div key={aluno.id} className={styles.aluno}>
            <p>{aluno.nome}</p>
            <p>{aluno.idade}</p>
            <p>{aluno.turma}</p>
            <p>{aluno.ultimoPagamento}</p>
            <p>{aluno.situacao}</p>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default Dashboard