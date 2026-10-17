//import React from 'react';
import styles from './LanguagesStyles.module.css';
import { languages } from '../../data/languagesData';

const Languages = () => {
    return (
        <section className={styles.languages}>
            <div className={styles['languages-container']}>
                <div className={styles['languages-header']}>
                    <span />
                    <p>Languages</p>
                    <span />
                </div>

                <h2 className={styles['languages-heading']}>Languages <span> I speak</span></h2>

                <div>
                    <p className={styles['languages-description']}>
                        A summary of <span>my languages</span> — and how confidently I use them.
                    </p>
                </div>

                <div className={styles.row}>
                {languages.map((lang) => (
                    <div key={lang.id} className={styles.lang}>
                    <span className={styles.name}>{lang.name}</span>
                    <div className={styles.dots}>
                        {[...Array(6)].map((_, i) => (
                        <span
                            key={i}
                            className={`${styles.dot} ${i < lang.bars ? styles.dotFilled : ''}`}
                        />
                        ))}
                    </div>
                    <span className={styles.level}>{lang.level}</span>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}

export default Languages;
