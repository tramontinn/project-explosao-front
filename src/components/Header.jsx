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
                    {/* <Link to="login">Login</Link> */}
                    <li>
                        <a href='https://www.youtube.com/@grupoexplosaodadanca8891' target='_blank' className={styles.icon}>
                            <FaYoutube />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/explosaodadanca/' target='_blank' className={styles.icon}>
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/grupo.explosao/' target='_blank' className={styles.icon}>
                            <FaInstagram />
                        </a>
                    </li>
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
                <a className={styles.fraseB} href="#meu-titulo">
                    <p className={styles.fraseBT} >Conheça nossas aulas</p>
                </a>            
            <img src={banner} className={styles.imgP}></img>
        </main>
    )
}

export default Header