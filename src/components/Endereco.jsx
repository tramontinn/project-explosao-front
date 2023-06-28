import styles from './Endereco.module.css'
import mapa from '../images/mapa.png'

function Endereco() {
    return (
        <div>
            <div className={styles.container}>
                <h1>Endereço</h1>
                <p>Rua Alegria de Jardim, 183, Vila Brás, Santos Dumont São Leopoldo/RS - CEP: 93115733</p>
                <div className={styles.iframeContainer}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.346632218588!2d-51.138267323541406!3d-29.738679717166445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951969d491f617a7%3A0xbad4c055394b3111!2sR.%20Alegria%20de%20Jardim%2C%20183%20-%20Santos%20Dumont%2C%20S%C3%A3o%20Leopoldo%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1687921626810!5m2!1spt-BR!2sbr" 
                    width="600" 
                    height="450" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
        </div>
    )
}

export default Endereco