//import React from 'react';
import styles from './LanguagesStyles.module.css';
import { languages } from '../../data/languagesData';
import { motion } from 'motion/react';
import { ease, container, fadeUp, row, lang, dot, viewport } from '../../animations/languagesAnimation';

const Languages = () => {
    return (
        <motion.section
            className={styles.languages}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
        >
            <div className={styles['languages-container']}>
                <motion.div variants={fadeUp} className={styles['languages-header']}>
                    <span />
                    <p>Languages</p>
                    <span />
                </motion.div>

                <motion.h2 variants={fadeUp} className={styles['languages-heading']}>Languages <span> I speak</span></motion.h2>

                <motion.div variants={fadeUp}>
                    <p className={styles['languages-description']}>
                        A summary of <span>my languages</span> — and how confidently I use them.
                    </p>
                </motion.div>

                <motion.div className={styles.row} variants={row}>
                {languages.map((language) => (
                    <motion.div
                        key={language.id}
                        className={styles.lang}
                        variants={lang}
                        whileHover={{ y: -4, transition: { duration: 0.3, ease } }}
                    >
                    <span className={styles.name}>{language.name}</span>
                    <div className={styles.dots}>
                        {[...Array(6)].map((_, i) => (
                        <motion.span
                            key={i}
                            variants={dot}
                            className={`${styles.dot} ${i < language.bars ? styles.dotFilled : ''}`}
                        />
                        ))}
                    </div>
                    <span className={styles.level}>{language.level}</span>
                    </motion.div>
                ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Languages;
