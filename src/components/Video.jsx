import styles from './Video.module.css'

function Video() {
    return (
        <div className={styles.container}>
            <iframe className={styles.imgV} 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/hfiHyWVowP4" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default Video