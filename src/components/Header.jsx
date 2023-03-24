import banner from '../images/Banner_Principal.png'
import logo from '../images/Logo.png'
import styles from './Header.module.css'
import { BsInstagram, BsFacebook, BsYoutube} from "react-icons/bs"

function Header() {
    return (
        <main>
            <img src={logo} className={styles.logo}></img>
            <a className={styles.log}>Login</a>
            <p className={styles.fraseP}>Amor em movimento!</p>
            <p className={styles.fraseT}>
            Intuito é possibilitar a dança, 
            teatro e Jiu-Jitsu para TODOS. 
            Através destas artes incríveis, queremos transformar vidas e 
            impulsionar sonhos! 
            Disseminar estas atividades em diversos lugares e ambientes, 
            com muita qualidade e profissionalismo, 
            mas sempre respeitando a singularidade de cada participante.
            </p>

            <button className={styles.fraseB}>
                <p className={styles.fraseBT}>Conheça nossas aulas</p>
            </button>
            
            <img src={banner} className={styles.imgP}></img>
        </main>
    )
}

export default Header