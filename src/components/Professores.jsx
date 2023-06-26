import styles from './Professores.module.css'
import graciela from '../images/graciela_souza.png'
import sonia from '../images/sonia_macedo.png'
import leandro from '../images/leandro_rosa.png'
import elder from '../images/elder_rocha.png'
import bruno from '../images/bruno_guerra.png'
import mateus from '../images/mateus_policena.png'
import adriano from '../images/adriano_guerra.png'
import vanusa from '../images/vanusa_chaves.png'
import luisa from '../images/luisa_carmo.png'

import ProfCard from './ProfCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useState } from 'react';
import ReactModal from 'react-modal'



const professorsData = [
    {
    image: graciela,
    name: 'Graciela Souza',
    job: 'Diretora/Professora de dança',
    description: 'Formada em Educação Física/Licenciatura, Pós-Graduada em Dança e cursando a Pós-Graduação em Dançaterapia. Iniciou a trajetória na dança em um projeto social, PEI (Programa Esporte Integral), no Grupo Baturidança. Bolsista na Corpus Cia de Dança por 18 anos, participando também da Cia Expressão de Rua – POA. Ministra aulas de dança desde 2003 em diversos locais, mas com ênfase principalmente em projetos sociais.',
    alt:'foto professora de dança Graciela'
    },
    {
    image: sonia,
    name: 'Sonia Macedo',
    job: 'Professora de dança',
    description: ' ',
    alt:'foto professora de dança Sonia'
    },
    {
    image: leandro,
    name: 'Leandro Rosa',
    job: 'Professor de dança',
    description: ' ',
    alt:'foto professor de dança Leandro'
    },
    {
    image: elder,
    name: 'Elder Rocha',
    job: 'Professor de dança',
    description: ' ',
    alt:'foto professor de dança Elder'
    },
    {
    image: bruno,
    name: 'Bruno',
    job: 'Professor de dança',
    description: ' ',
    alt:'foto professor de dança Bruno'
    },
    {
    image: mateus,
    name: 'Mateus Policena',
    job: 'Professor de dança',
    description: ' ',
    alt:'foto professor de dança Mateus'
    },
    {
    image: adriano,
    name: 'Adriano Guerra',
    job: 'Professor de Jiu-Jitsu',
    description: ' ',
    alt:'foto professor de Jiu-Jitsu Adriano'
    },
    {
    image: vanusa,
    name: 'Vanusa Chaves',
    job: 'Professora de Yoga',
    description: ' ',
    alt:'foto professora de yoga Vanusa'
    },
    {
    image: luisa,
    name: 'Luisa do Carmo',
    job: 'Professora de teatro',
    description: ' ',
    alt:'foto professora de teatro Luisa'
    },

]


function Professores() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
    setIsModalOpen(true);
    };

    const closeModal = () => {
    setIsModalOpen(false);
    };

const firstProfessor = professorsData[0]

return (
    <main className={styles.containerProf}>
        <div className={styles.conProf}>Conheça nossos professores</div>
        <div className={styles.entorno}>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
        >
        {professorsData.map(professor => 
            <SwiperSlide key={professor.name}>
                <ProfCard  img={professor.image} alt={professor.alt} name={professor.name} job={professor.job}>
                </ProfCard>
            </SwiperSlide>)}
            </Swiper>
            <button onClick={openModal}>Saiba mais</button>
                <ReactModal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel='Informações adicionais' ariaHideApp={false}
                    style={{
                        content: {
                            background: '#090909',
                            // width: '1118px',
                            // height: '565px',
                            top: '490px',
                            left: '150px',
                            color: 'white',
                            display: 'flex',
                            gap: '35px',
                        },
                        overlay: {
                            background: 'transparent',

                        }
                    }}>
                    <div>
                        <h2>{firstProfessor.name}</h2>
                        <p>{firstProfessor.description}</p>
                    </div>
                    <button onClick={closeModal}>X</button>
                </ReactModal>
            </div>
        </main>
    )
}

export default Professores