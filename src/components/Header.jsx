import banner from '../images/Banner_Principal.png'
import logo from '../images/Logo.png'
import styles from './Header.module.css'
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <main>
            <div className={styles.cabec}>
                <img src={logo} className={styles.logo}></img>
                <ul className={styles.socials}>
                    <Link to="login">Login</Link>
                    <li><FaYoutube /></li>
                    <li><FaFacebookF /></li>
                    <li><FaInstagram /></li>
                </ul>
            </div>
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