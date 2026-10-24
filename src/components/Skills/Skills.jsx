//import React from 'react';
import styles from './SkillsStyles.module.css';
import { Users, ShieldCheck, Wrench, Monitor, Clock, MessageCircle } from 'lucide-react';
import { skills } from '../../data/skillsData';

const iconMap = { Users, ShieldCheck, Wrench, Monitor, Clock, MessageCircle }

const Skills = () => {
    return (
        <section className={styles.skills}>
            <div className={styles['skills-container']}>
                <div className={styles['skills-header']}>
                    <span />
                    <p>Skills</p>
                    <span/>
                </div>

                <h2 className={styles['skills-heading']}>My skills <span> I possess</span></h2>

                <div>
                    <p className={styles['skills-description']}>
                        <span>My key skills</span> — built through hands-on experience.
                    </p>
                </div>

                <div className={styles['skills-grid']}>
                    {skills.map((skill) => {
                        const Icon = iconMap[skill.icon];
                        return (
                            <div className={styles['skill-card']} key={skill.id}>
                                <div className={styles['skill-icon']}>
                                    <Icon size={24} />
                                </div>
                                <h3 className={styles['skill-title']}>{skill.title}</h3>
                                <p className={styles['skill-description']}>{skill.description}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
}

export default Skills;
