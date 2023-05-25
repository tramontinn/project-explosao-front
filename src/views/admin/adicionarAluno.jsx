import React, { useState } from 'react'
import styles from './adicionarAluno.module.css'


const adicionarAluno = () => {

  const [name, setName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [guardianPhoneNumber, setGuardianPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [studentNotes, setStudentNotes] = useState('');
  const [phoneList, setPhoneList] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthday, setBirthday] = useState('');
  const [registration, setRegistration] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
  const dados = {
    name,
    phoneNumber,
    guardianPhoneNumber,
    address,
    city,
    neighborhood,
    studentNotes,
    phoneList,
    guardianName,
    cpf,
    birthday,
    registration
  }
  // fetch('http://localhost:8001/explosao-service/student/', {
  //   method: 'POST',
  //   Headers: {
  //     'Content-type': 'aplication/json',
  //   },
  //   body: JSON.stringify(dados),
  // })
  // .then((response) => response.json())
  // .then((data) => {
  //   console.log(data)
  // })
  // .catch((error) => {
  //   console.log(error)
  // })
  console.log(dados)
}


  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h1 className={styles.phrase}>Adicionar aluno</h1>
      <p className={styles.infosAluno}>Informações pessoais<span /></p>
      
      
      <label className={styles.labelName}>Nome do aluno</label> 
      <input type='text' value={name} onChange={(event) => setName(event.target.value)} placeholder='Nome do aluno' className={styles.name}/>

      <label className={styles.labelDate}>Data de nascimento</label>
      <input type='date' value={birthday} onChange={(event) => setBirthday(event.target.value)} placeholder='DD MM AA' className={styles.date}/>

      <label className={styles.labelTelefone}>Telefone</label>
      <input type='number' value={phoneNumber} onChange={(event) => setphoneNumber(event.target.value)} placeholder='Telefone' className={styles.telefone}/>

      <label className={styles.labelCPF}>CPF</label>
      <input type='number' value={cpf} onChange={(event) => setCpf(event.target.value)} placeholder='CPF' className={styles.cpf}/>

      <label className={styles.labelRG}>RG</label>
      <input type='number' placeholder='RG' className={styles.RG}/>


      <label className={styles.labelEmail}>Email</label>
      <input type='email' value={registration} onChange={(event) => setRegistration(event.target.value)} placeholder='Email' className={styles.email}/>


      <label className={styles.labelEndereco}>Endereço</label>
      <input type='text' value={address} onChange={(event) => setAddress(event.target.value)} placeholder='Rua, número, complemento' className={styles.endereco}/>


      <label className={styles.labelBairro}>Bairro</label>
      <input type='text' value={neighborhood} onChange={(event) => setNeighborhood(event.target.value)} placeholder='Bairro' className={styles.bairro}/>


      <label className={styles.labelCidade}>Cidade</label>
      <input type='text' value={city} onChange={(event) => setCity(event.target.value)} placeholder='Cidade' className={styles.cidade}/>


      <label className={styles.labelProblema}>Possui algum problema de saúde?</label>
      <input type='text' value={studentNotes} onChange={(event) => setStudentNotes(event.target.value)} placeholder='Escreva aqui' className={styles.problema}/>


      <label className={styles.labelResponsavel}>Nome do responsável</label>
      <input type='text' value={guardianName} onChange={(event) => setGuardianName(event.target.value)} placeholder='Nome do responsável' className={styles.responsavel}/>


      <label className={styles.labelTelefoneR}>Telefone responsável</label>
      <input type='number' value={guardianPhoneNumber} onChange={(event) => setGuardianPhoneNumber(event.target.value)} placeholder='Telefone' className={styles.telefoneR}/>

      <button type='submit' className={styles.enviar}>Enviar</button>
    
    </form>
  )
}


export default adicionarAluno