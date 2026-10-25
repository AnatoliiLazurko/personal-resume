//import React from 'react';
import styles from './InterestsStyles.module.css';
import { interests } from '../../data/interestsData';
import { Dumbbell, CodeXml, Gamepad2, Film, Clapperboard, BookOpen } from 'lucide-react';

const iconMap = { Dumbbell, CodeXml, Gamepad2, Film, Clapperboard, BookOpen }

const Interests = () => {
    return (
        <section className={styles.interests}>
            <div className={styles['interests-container']}>

                <div className={styles['interests-header']}>
                    <span />
                    <p>Interests</p>
                    <span/>
                </div>

                <h2 className={styles['interests-heading']}>Interests <span> I have</span></h2>

                <div>
                    <p className={styles['interests-description']}>
                        What I enjoy <span>outside of work</span>.
                    </p>
                </div>


                <div className={styles['interests-grid']}>
                    {interests.map((interest) => {
                        const Icon = iconMap[interest.icon]
                        return (
                        <div key={interest.id} className={styles['interest-item']}>
                            <div className={styles['interest-circle']}>
                                <Icon size={30} />
                            </div>
                            <span className={styles['interest-name']}>{interest.name}</span>
                        </div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
}

export default Interests;