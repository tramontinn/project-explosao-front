import styles from './Professores.module.css'


function Professores() {
    return (
        <main className={styles.containerProf}>
            <div className={styles.conProf}>Conheça nossos professores</div>
            <div className={styles.entorno}>
                <div className={styles.cardProf}></div>
            </div>
        </main>
    )
}

export default Professores