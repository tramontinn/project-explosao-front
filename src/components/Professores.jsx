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
        <div className={styles.titleProf}>Conheça nossos professores</div>
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
            </div>
        </main>
    )
}

export default Professores