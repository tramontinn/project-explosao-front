import styles from './Aulas.module.css'
import aula from '../images/aula.png'

function Aulas() {
    return (
        <main className={styles.background}>
            <div className={styles.entorno}>Nossas aulas</div>
            <div className={styles.aulas}>

                <div className={styles.aulaJazz}>
                    <div className={styles.jazz}>JAZZ DANCE</div>
                        <p className={styles.jazzSobre}>
                            Este estilo de dança é um dos mais populares do mundo, conhecido pela sua combinação de movimentos de jazz, ballet e contemporâneo.
                        </p>
                        <button><p>AGENDE UMA AULA</p></button>                
                    </div>
                
                <div className={styles.aulaDancaUrbana}>
                    <div className={styles.dancaurbana}>DANÇAS URBANAS</div>
                        <p className={styles.dancaUrbanaSobre}>
                            Danças urbanas são uma forma empolgante e vibrante de dançar, que incorpora estilos como hip-hop e breakdance. As aulas de danças urbanas são uma forma de se conectar com a cultura e a história da dança de rua                        </p>
                    <button><p>AGENDE UMA AULA</p></button>                
                </div>


                <div className={styles.aulaContemp}>
                    <div className={styles.contemp}>CONTEM-PORÂNEA</div>
                        <p className={styles.sobreContemp}>
                        As aulas de dança contemporânea são uma forma expressiva e emocionante de dançar, que incorpora elementos do ballet clássico, da dança moderna e outras técnicas de dança.
                        </p>
                    <button><p>AGENDE UMA AULA</p></button>                
                </div>

                <div className={styles.aulaBallet}>
                    <div className={styles.ballet}>BALLET</div>
                        <p className={styles.sobreBallet}>
                        Em nossas aulas, você aprenderá a dominar os movimentos básicos do ballet clássico, enquanto trabalha na sua postura, equilíbrio e flexibilidade. Com aulas para o público adulto e infantil.
                        </p>
                    <button><p>AGENDE UMA AULA</p></button>                
                </div>

                <div className={styles.aulaAcroba}>
                    <div className={styles.acroba}>ACROBACIAS</div>
                        <p className={styles.sobreAcroba}>
                        As aulas de acrobacias são uma forma emocionante e desafiadora de dançar, que envolve movimentos acrobáticos e ginásticos combinados com elementos da dança.
                        </p>
                    <button><p>AGENDE UMA AULA</p></button>                
                </div>

                <div className={styles.aulaTeatro}>
                    <div className={styles.teatro}>TEATRO</div>
                        <p className={styles.sobreTeatro}>
                        Em nossas aulas, você aprenderá técnicas de voz, corpo e improvisação, enquanto desenvolve suas habilidades de atuação e criatividade.
                        </p>
                    <button><p>AGENDE UMA AULA</p></button>                
                </div>

                <div className={styles.aulaJiu}>
                    <div className={styles.jiu}>JIU-JITSU</div>
                        <p className={styles.sobreJiu}>
                            As aulas de jiu-jitsu são uma forma empolgante e desafiadora de se exercitar, que combina técnicas de luta e artes marciais. Junte-se a nós para uma aula e descubra a força e a coragem do jiu-jitsu!
                        </p>
                    <button><p>AGENDE UMA AULA</p></button>                
                </div>

            </div>
        </main>
    )
}

export default Aulas