import styles from './ExperienceStyles.module.css';
import { experience } from '../../data/experienceData';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
    return (
        <section className={styles.experience}>
            <div className={styles['experience-container']}>
                <div className={styles['experience-header']}>
                    <span />
                    <p>Work Experience</p>
                    <span/>
                </div>
                <div>
                    <p className={styles['experience-description']}>
                        An overview of <span>my recent roles</span> — click each entry to see full details.
                    </p>
                </div>
                
                <div className={styles['experience-grid']}>

                    {experience.map((item) => (
                        <ExperienceItem key={item.id} {...item} />
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Experience;