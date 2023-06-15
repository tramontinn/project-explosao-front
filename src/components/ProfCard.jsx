import React from 'react'
import styles from './ProfCard.module.css'

const ProfCard = (props) => {
  return (
        <div className={styles.cardProf}>
            <img className={styles.profcard} src={props.img} alt={props.alt}></img>
            <span className={styles.profName}>{props.name}
                <p className={styles.profJob}>{props.job}</p>
            </span>
        </div>
  )
}

export default ProfCard