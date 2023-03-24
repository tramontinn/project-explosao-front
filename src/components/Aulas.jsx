import styles from './Aulas.module.css'
import aula from '../images/aula.png'

function Aulas() {
    return (
        <main>
            <div className={styles.background}></div>
            <div className={styles.entorno}>Nossas aulas</div>
            <div className={styles.aulas}>

                <div className={styles.aulaJazz}>
                    <img src={aula}></img>
                    <div className={styles.jazz}>JAZZ DANCE</div>
                            <h1>SOBRE</h1>
                            <p className={styles.jazzSobre}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo urna, 
                            mattis consequat condimentum sed, hendrerit et ipsum. Duis volutpat, libero id pretium efficitur, ex dolor pharetra nisl,
                            </p>                
                    </div>

                <div className={styles.aulaDu}>
                    <img src={aula}></img>
                    <div className={styles.dancaUrbana}>DANÇAS URBANAS</div>
                        <h1>SOBRE</h1>
                        <p className={styles.duSobre}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo urna, 
                        mattis consequat condimentum sed, hendrerit et ipsum. Duis volutpat, libero id pretium efficitur, ex dolor pharetra nisl,
                        </p>
                </div>
            </div>
        </main>
    )
}

export default Aulas