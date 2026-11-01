//import React from 'react';
import styles from './EducationStyles.module.css';
import { education } from '../../data/educationData';
import { motion } from 'motion/react';
import { ease, container, fadeUp, timeline, line, itemCard, marker, cardIn, viewport } from '../../animations/educationAnimation';

const Education = () => {
    return (
        <motion.section
            id="education"
            className={styles.education}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
        >
        <div className={styles['education-container']}>
            <motion.div variants={fadeUp} className={styles['education-header']}>
                <span />
                <p>Education</p>
                <span />
            </motion.div>
                
            <motion.h2 variants={fadeUp} className={styles['education-heading']}>Education <span> I received</span></motion.h2>
                
            <motion.div variants={fadeUp}>
                <p className={styles['education-description']}>
                    A summary of <span>my qualifications</span> and academic history.
                </p>
            </motion.div>

            <motion.div variants={timeline} className={styles.timeline}>
                <motion.span className={styles['timeline-line']} variants={line} aria-hidden="true" />
                
                {education.map((item) => (
                    <motion.div key={item.id} className={styles['timeline-item']} variants={itemCard}>
                        <motion.div className={styles['timeline-marker']} variants={marker} />
                        <motion.div
                            className={styles['timeline-content']}
                            variants={cardIn}
                            whileHover={{ x: 4, transition: { duration: 0.3, ease } }}
                        >
                            <div className={styles['timeline-top']}>
                                <p className={styles['timeline-institution']}>{item.institution}</p>
                                <span className={styles['timeline-period']}>{item.period}</span>
                            </div>
                            <ul className={styles['timeline-details']}>
                                {item.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                ))}    
            </motion.div>
        </div>
        </motion.section>
    );
}

export default Education;