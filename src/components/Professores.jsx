import styles from './Professores.module.css'
import graciela from '../images/graciela_souza.png'
import sonia from '../images/sonia_macedo.png'
import leandro from '../images/leandro_rosa.png'
import elder from '../images/elder_rocha.png'
import bruno from '../images/bruno_guerra.png'
// import mateus from '../images/mateus_policena.png'
// import adriano from '../images/adriano_guerra.png'
// import vanusa from '../images/vanusaa_chaves.png'
// import luisa from '../images/luisa_carmo.png'

import ProfCard from './ProfCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const professorsData = [
    {
    image: graciela,
    name: 'Graciela Souza',
    job: 'Diretora/Professora de dança',
    description: ' '
    },
    {
    image: sonia,
    name: 'Sonia Macedo',
    job: 'Professora de dança',
    description: ' '
    },
    {
    image: leandro,
    name: 'Leandro Rosa',
    job: 'Professor de dança',
    description: ' '
    },
    {
    image: elder,
    name: 'Elder Rocha',
    job: 'Professor de dança',
    description: ' '
    },
    {
    image: bruno,
    name: 'Bruno',
    job: 'Professor de dança',
    description: ' '
    },

]


function Professores() {
    return (
        <main className={styles.containerProf}>
            <div className={styles.conProf}>Conheça nossos professores</div>
            <div className={styles.entorno}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{ clickable: true }}
                navigation
            >
                {professorsData.map(professor => <SwiperSlide key={professor.name}><ProfCard img={professor.image} name={professor.name} job={professor.job}/></SwiperSlide>)}
            </Swiper>
            </div>
        </main>
    )
}

export default Professores