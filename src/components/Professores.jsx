import styles from './Professores.module.css'
import ProfCard from './ProfCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useState } from 'react';
import professorsData from '../data/ProfessoresData'

function Professores() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [professorModal, setProfessorModal] = useState("")

    const openModal = () => {
    setIsModalOpen(true);
    };

    const closeModal = () => {
    setIsModalOpen(false);
    };

    const openProfessorModal = (professor) => {
        setProfessorModal(professor)
        openModal()
    }

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
                <ProfCard professor={professor} img={professor.image} alt={professor.alt} name={professor.name} job={professor.job} showInfo={openProfessorModal}>
                </ProfCard>
                {/* <button value={JSON.stringify(professor)} onClick={(e) => openProfessorModal(JSON.parse(e.target.value))}>Saiba mais</button>                 */}
            </SwiperSlide>)}
            </Swiper>
            
            {isModalOpen ? (
                <div className={styles.infoContainer}>
                    <button className={styles.closeBtn} onClick={closeModal}>X</button>
                    <span>
                        <div className={styles.infoTitle}>{professorModal.name}</div>
                        {professorModal.instagram && (
                            <a target='_blank' href={`https://www.instagram.com/${professorModal.instagram}`}>@{professorModal.instagram}</a>
                        )}
                    </span>
                    <p>
                        {professorModal.description}
                    </p>
                </div>
                )
            : null}




            {/* <ReactModal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel='Informações adicionais' ariaHideApp={false} parentSelector={() => document.querySelector('#root')}
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
                            zIndex: '10000',
                        },
                        overlay: {
                            background: 'transparent',

                        }
                    }}>
                    <div>
                        <h2>{professorModal.name}</h2>
                        <p>{professorModal.description}</p>
                    </div>
                    <button onClick={closeModal}>X</button>
                </ReactModal> */}
            </div>
        </main>
    )
}

export default Professores