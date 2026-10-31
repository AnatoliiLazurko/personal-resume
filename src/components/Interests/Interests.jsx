//import React from 'react';
import styles from './InterestsStyles.module.css';
import { interests } from '../../data/interestsData';
import { Dumbbell, CodeXml, Gamepad2, Film, Clapperboard, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { ease, container, row, item, fadeUp, viewport } from '../../animations/interestsAnimation';

const iconMap = { Dumbbell, CodeXml, Gamepad2, Film, Clapperboard, BookOpen }


const Interests = () => {
    return (
        <motion.section
            className={styles.interests}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
        >
            <div className={styles['interests-container']}>

                <motion.div variants={fadeUp} className={styles['interests-header']}>
                    <span />
                    <p>Interests</p>
                    <span/>
                </motion.div>

                <motion.h2 variants={fadeUp} className={styles['interests-heading']}>Interests <span> I have</span></motion.h2>

                <motion.div variants={fadeUp}>
                    <p className={styles['interests-description']}>
                        What I enjoy <span>outside of work</span>.
                    </p>
                </motion.div>


                <motion.div variants={row} className={styles['interests-grid']}>
                    {interests.map((interest) => {
                        const Icon = iconMap[interest.icon]
                        return (
                        <motion.div
                            key={interest.id}
                            variants={item}
                            whileHover={{ y: -6, transition: { duration: 0.3, ease } }}
                            className={styles['interest-item']}
                        >
                            <div className={styles['interest-circle']}>
                                <Icon size={30} />
                            </div>
                            <span className={styles['interest-name']}>{interest.name}</span>
                        </motion.div>
                        )
                    })}
                </motion.div>

            </div>
        </motion.section>
    );
}

export default Interests;