//import React from 'react';
import styles from './PersonalProfileStyles.module.css';
import { MapPin, CircleStar, UserPlus } from 'lucide-react'
import MyPhoto from '../../picture/my-photo.jpg';

const PersonalProfile = () => {
    return (
        <section className={styles['personal-profile']}>
            <div className={styles['personal-profile-container']}>
                <div className={styles['personal-profile-header']}>
                    <span />
                    <p>Personal Profile</p>
                    <span/>
                </div>

                <div className={styles['personal-profile-content']}>
                    <div className={styles['personal-profile-image']}>
                        <div className={styles['personal-profile-image-container']}>
                            <img src={MyPhoto} alt="Profile" />
                        </div>
                        <div className={styles['download-cv-button']}>
                            DOWNLOAD CV
                        </div>
                    </div>
                    <div className={styles['personal-profile-info']}>
                        <div className={styles['personal-profile-text']}>
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
                        </div>
                        <div className={styles['personal-profile-details']}>
                            <div className={styles['personal-profile-details-item']}>
                                <div className={styles['details-item-container']}>
                                    <div className={styles['details-item-icon']}>
                                        <MapPin size={30}/>
                                    </div>
                                    <p>Location</p>
                                </div>
                                <p className={styles['details-item-value']}>Mitcham</p>
                            </div>
                            <div className={styles['personal-profile-details-item']}>
                                <div className={styles['details-item-container']}>
                                    <div className={styles['details-item-icon']}>
                                        <UserPlus size={30} />
                                    </div>
                                    <p>Age</p>
                                </div>
                                <p className={styles['details-item-value']}>21 years old</p>
                            </div>
                            <div className={styles['personal-profile-details-item']}>
                                <div className={styles['details-item-container']}>
                                    <div className={styles['details-item-icon']}>
                                        <CircleStar size={30} />
                                    </div>
                                    <p>Experience</p>
                                </div>
                                <p className={styles['details-item-value']}>2+ years</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
        </section>
    );
}

export default PersonalProfile;
