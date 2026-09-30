//import React from 'react';
import styles from './EducationStyles.module.css';
import { education } from '../../data/educationData';

const Education = () => {
    return (
        <section className={styles.education}>
        <div className={styles['education-container']}>
            <div className={styles['education-header']}>
                <span />
                <p>Education</p>
                <span />
            </div>
            <div>
                <p className={styles['education-description']}>
                    A summary of <span>my qualifications</span> and academic history.
                </p>
            </div>

            <div className={styles.timeline}>
                {education.map((item) => (
                    <div key={item.id} className={styles['timeline-item']}>
                        <div className={styles['timeline-marker']} />
                        <div className={styles['timeline-content']}>
                            <div className={styles['timeline-top']}>
                                <p className={styles['timeline-institution']}>{item.institution}</p>
                                <span className={styles['timeline-period']}>{item.period}</span>
                            </div>
                            <ul className={styles['timeline-details']}>
                                {item.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
}

export default Education;