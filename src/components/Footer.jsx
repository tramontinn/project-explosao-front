import styles from './Footer.module.css'
import logo from '../images/Logo.png'
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'


function Footer() {
    return (
        <main>
            <div className={styles.container}>
                <img src={logo} className={styles.logo}></img>
                    <div className={styles.contacts}>
                        <p className={styles.number}>51 9 9330-2829</p>
                        <p className={styles.mail}>explosaodance@gmail.com</p>
                    </div>
                <ul className={styles.social}>
                    <a href='https://www.instagram.com/grupo.explosao/' className={styles.icon}><FaInstagram /></a>
                    <a href='https://www.facebook.com/explosaodadanca/' className={styles.icon}><FaFacebookF /></a>
                    <a href='https://www.youtube.com/@grupoexplosaodadanca8891' className={styles.icon}><FaYoutube /></a>
                </ul>
                <div className={styles.creators}>Criadores<br/> Gabriel Rosa  |  Guilherme Tramontin  |  Renan Rosa</div>
                <div className={styles.desenv}>Site desenvolvido na disciplina<br/> Projeto Integrador Web - Universidade La Salle Canoas</div>
            </div>
        </main>
    )
}

export default Footer