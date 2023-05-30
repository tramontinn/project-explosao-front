import React, { useState, useEffect } from 'react'
import styles from './adicionarTurma.module.css'
import { useNavigate } from 'react-router-dom'


const adicionarTurma = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/admin/dashboard')
    }

    const [classroomName, setclassroomName] = useState('')
    const [weekDay, setweekDay] = useState('')
    const [classroomTime, setclassroomTime] = useState('')
    const [classroomEndTime, setclassroomEndTime] = useState('')
    const [professorName, setprofessorName] = useState('')
    const [status, setStatus] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();

    const dados = {
        classroomName,
        weekDay,
        classroomTime,
        classroomEndTime,
        professorName,
        status
    }
}

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
        <h1 className={styles.phrase}>Adicionar Turma</h1>
        <p className={styles.infosAluno}>Informações pessoais<span /></p>

        <label className={styles.labelclassroomName}>Nome da turma</label> 
        <input type='text' value={classroomName} onChange={(e) => setclassroomName(e.target.value)} placeholder='Nome da turma' className={styles.classroomName}/>  

        <label className={styles.labelprofessorName}>Nome do professor</label>
        <input type='text' value={professorName} onChange={(e) => setprofessorName(e.target.value)} placeholder='Nome do professor' className={styles.professorName}/>

        <label className={styles.labelweekDay}>Dia da semana</label>
        <select value={weekDay} onChange={(e) => setweekDay(e.target.value)} className={styles.weekDay}>
            <option value="segunda">Segunda-feira</option>
            <option value="terca">Terça-feira</option>
            <option value="quarta">Quarta-feira</option>
            <option value="quinta">Quinta-feira</option>
            <option value="sexta">Sexta-feira</option>
        </select>

        <label className={styles.labelclassroomTime}>Horário de início</label>
        <input type='time' value={classroomTime} onChange={(e) => setclassroomTime(e.target.value)} placeholder='Início' className={styles.classroomTime}/>

        <label className={styles.labelclassroomEndTime}>Horário de conclusão</label>
        <input type='time' value={classroomEndTime} onChange={(e) => setclassroomEndTime(e.target.value)} placeholder='Final' className={styles.classroomEndTime}/>

        {/* <label className={styles.labelstatus}>
            <input type="radio" name="status" value="ativado" checked className={styles.status}/>
            <input type="radio" name="status" value="desativado" />
        </label> */}

        <button type='submit' className={styles.enviar}>Salvar</button>
        <button className={styles.cancelar} onClick={handleClick}><p>Cancelar</p></button>
    </form>

  )
}

export default adicionarTurma