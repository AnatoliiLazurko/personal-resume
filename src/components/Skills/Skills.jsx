//import React from 'react';
import styles from './SkillsStyles.module.css';
import { Users, ShieldCheck, Wrench, Monitor, Clock, MessageCircle } from 'lucide-react';
import { skills } from '../../data/skillsData';
import { motion } from 'motion/react';
import { ease, container, fromBottom, fadeUp, viewport } from '../../animations/skillsAnimation';

const iconMap = { Users, ShieldCheck, Wrench, Monitor, Clock, MessageCircle }

const Skills = () => {
    return (
        <motion.section
            className={styles.skills}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
        >
            <div className={styles['skills-container']}>
                <motion.div variants={fadeUp} className={styles['skills-header']}>
                    <span />
                    <p>Skills</p>
                    <span/>
                </motion.div>

                <motion.h2 variants={fadeUp} className={styles['skills-heading']}>My skills <span> I possess</span></motion.h2>

                <motion.div variants={fadeUp}>
                    <p className={styles['skills-description']}>
                        <span>My key skills</span> — built through hands-on experience.
                    </p>
                </motion.div>

                <div className={styles['skills-grid']}>
                    {skills.map((skill) => {
                        const Icon = iconMap[skill.icon];
                        return (
                            <motion.div
                                variants={fromBottom}
                                whileHover={{ y: -4, transition: { duration: 0.3, ease } }}
                                className={styles['skill-card']}
                                key={skill.id}
                            >
                                <motion.div
                                    variants={fromBottom}
                                    className={styles['skill-icon']}
                                    whileHover={{ rotate: -8, scale: 1.12, transition: { duration: 0.3, ease } }}
                                >
                                    <Icon size={24} />
                                </motion.div>
                                <h3 className={styles['skill-title']}>{skill.title}</h3>
                                <p className={styles['skill-description']}>{skill.description}</p>
                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </motion.section>
    );
}

export default Skills;
