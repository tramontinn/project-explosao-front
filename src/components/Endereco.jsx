import styles from './Endereco.module.css'
import mapa from '../images/mapa.png'

function Endereco() {
    return (
        <main>
            <div className={styles.container}>
                <h1>Endereço</h1>
                <p>Rua Alegria de Jardim, 183, Vila Brás, Santos Dumont São Leopoldo/RS - CEP: 93115733</p>
                <img src={mapa}></img>
            </div>
        </main>
    )
}

export default Endereco