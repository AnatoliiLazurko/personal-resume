//import React from 'react';
import styles from './PersonalProfileStyles.module.css';
import { MapPin, CircleStar, BadgeCheck  } from 'lucide-react'
import MyPhoto from '../../picture/my-photo.jpg';
import { motion } from 'motion/react';
import { container, fadeUp, fadeButtonUp, fromLeft, fromRight, fromBottom } from '../../animations/personalProfileAnimation';

const PersonalProfile = () => {
    return (
        <motion.section
            className={styles['personal-profile']}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
        >
            <div className={styles['personal-profile-container']}>
                <motion.div variants={fadeUp} className={styles['personal-profile-header']}>
                    <span />
                    <p>Personal Profile</p>
                    <span/>
                </motion.div>

                <motion.h2 variants={fadeUp} className={styles['personal-profile-heading']}>Main about <span>myself</span></motion.h2>

                <div className={styles['personal-profile-content']}>
                    <div className={styles['personal-profile-image']}>
                        <motion.div variants={fromLeft} className={styles['personal-profile-image-container']}>
                            <img src={MyPhoto} alt="Profile" />
                        </motion.div>
                        <motion.div variants={fadeButtonUp} className={styles['download-cv-button']}>
                            DOWNLOAD CV
                        </motion.div>
                    </div>
                    <div className={styles['personal-profile-info']}>
                        <motion.div variants={fromRight} className={styles['personal-profile-text']}>
                            <p>Hello! My name is <span>Anatolii Lazurco</span>.</p>
                            <p>
                                Reliable and adaptable employee with <span>over two years</span> of experience across various roles,
                                consistently eager to learn new skills and take on new responsibilities.
                            </p>
                            <p>
                                Experienced in <span>maintenance work</span>, having worked as an assistant facilities manager
                                and later as a <span>school caretaker</span>, this role developed my <span>practical</span> and <span>problem-solving skills</span>.
                                Also gained supervisory experience leading a small team, which strengthened my <span>teamwork </span>
                                and <span>communication</span> abilities. Additionally hold a diploma in Software Development, providing
                                <span> computer literacy</span> and confidence with digital systems and tools.
                            </p>
                            <p>Currently seeking a role where I can apply my <span>hands-on experience</span>, reliability, and strong work ethic.</p>
                        </motion.div>
                        <div className={styles['personal-profile-details']}>
                            <motion.div variants={fromBottom} className={styles['personal-profile-details-item']}>
                                <div className={styles['details-item-container']}>
                                    <motion.div variants={fromBottom} className={styles['details-item-icon']} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                        <MapPin size={30}/>
                                    </motion.div>
                                    <p>Location</p>
                                </div>
                                <p className={styles['details-item-value']}>Mitcham</p>
                            </motion.div>
                            <motion.div variants={fromBottom} className={styles['personal-profile-details-item']}>
                                <div className={styles['details-item-container']}>
                                    <motion.div variants={fromBottom} className={styles['details-item-icon']} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                        <BadgeCheck  size={30} />
                                    </motion.div>
                                    <p>Right to work</p>
                                </div>
                                <p className={styles['details-item-value']}>Full UK</p>
                            </motion.div>
                            <motion.div variants={fromBottom} className={styles['personal-profile-details-item']}>
                                <div className={styles['details-item-container']}>
                                    <motion.div variants={fromBottom} className={styles['details-item-icon']} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                        <CircleStar size={30} />
                                    </motion.div>
                                    <p>Experience</p>
                                </div>
                                <p className={styles['details-item-value']}>2+ years</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>         
        </motion.section>
    );
}

export default PersonalProfile;
