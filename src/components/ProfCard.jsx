import React from 'react'
import styles from './ProfCard.module.css'

const ProfCard = (props) => {

  return (
        <div className={styles.cardProf}>
            <img className={styles.profcard} src={props.img} alt={props.alt}></img>
            <div className={styles.cardInfo}>
              <span className={styles.profName}>{props.name}
              </span>
              <p className={styles.profJob}>{props.job}</p>
              <button className={styles.profBtn} value={JSON.stringify(props.professor)} onClick={(e) => props.showInfo(JSON.parse(e.target.value))}>Saiba mais</button>
            </div>
        </div>
  )
}

export default ProfCard