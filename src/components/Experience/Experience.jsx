import styles from './ExperienceStyles.module.css';
import { experience } from '../../data/experienceData';
import ExperienceItem from './ExperienceItem';
import { motion } from 'motion/react';
import { container, fadeUp, viewport } from '../../animations/experienceAnimation';

const Experience = () => {
    return (
        <motion.section
            className={styles.experience}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
        >
            <div className={styles['experience-container']}>
                <motion.div variants={fadeUp} className={styles['experience-header']}>
                    <span />
                    <p>Work Experience</p>
                    <span/>
                </motion.div>

                <motion.h2 variants={fadeUp} className={styles['experience-heading']}>Work experience <span> I hold</span></motion.h2>

                <motion.div variants={fadeUp}>
                    <p className={styles['experience-description']}>
                        An overview of <span>my recent roles</span> — click each entry to see full details.
                    </p>
                </motion.div>
                
                <div className={styles['experience-grid']}>

                    {experience.map((item) => (
                        <ExperienceItem key={item.id} {...item} />
                    ))}

                </div>
            </div>
        </motion.section>
    );
}

export default Experience;