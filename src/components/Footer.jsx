import styles from './Footer.module.css'
import logo from '../images/Logo.png'
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'


function Footer() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <img src={logo} className={styles.logo}></img>
                    <div className={styles.contacts}>
                        <p className={styles.number}>51 9 9330-2829</p>
                        <p className={styles.mail}>explosaodance@gmail.com</p>
                    </div>
                </div>
                <ul className={styles.social}>
                    <a href='https://www.youtube.com/@grupoexplosaodadanca8891' target='_blank' className={styles.icon}><FaYoutube /></a>
                    <a href='https://www.facebook.com/explosaodadanca/' target='_blank' className={styles.icon}><FaFacebookF /></a>
                    <a href='https://www.instagram.com/grupo.explosao/' target='_blank' className={styles.icon}><FaInstagram /></a>
                </ul>
                <div className={styles.innerContainer}>
                    <div className={styles.desenv}>Site desenvolvido na disciplina<br/> Projeto Integrador Web - Universidade La Salle Canoas</div>
                    <div className={styles.creators}>Criadores<br/> Gabriel Rosa  |  Guilherme Tramontin  |  Renan Rosa</div>
                </div>
            </div>
        </div>
    )
}

export default Footer