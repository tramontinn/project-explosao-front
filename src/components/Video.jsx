import styles from './Video.module.css'
import banner from '../images/Banner_video.png'

function Video() {
    return (
        <main className={styles.container}>
            <img src={banner} className={styles.imgV}></img>
        </main>
    )
}

export default Video