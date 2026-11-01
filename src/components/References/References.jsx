//import React from 'react';
import styles from './ReferencesStyles.module.css';
import { references } from '../../data/referencesData';
import { Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { container, button, fadeUp, grid, card, viewport } from '../../animations/referencesAnimation';

const References = () => {

    const handleRequest = () => {
        const to = import.meta.env.VITE_CONTACT_EMAIL
        const subject = 'Reference Request'
        const body = [
            'Hello Anatolii,',
            '',
            'I would like to request references for you.',
            '',
            'Kind regards,',
        ].join('\n')

        const url =
            `https://mail.google.com/mail/?view=cm&fs=1` +
            `&to=${encodeURIComponent(to)}` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`

        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <motion.section
            id="references"
            className={styles.references}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
        >
            <div className={styles['references-container']}>
                <motion.div variants={fadeUp} className={styles['references-header']}>
                    <span />
                    <p>References</p>
                    <span />
                </motion.div>

                <motion.h2 variants={fadeUp} className={styles['references-heading']}>References <span> I have</span></motion.h2>

                <motion.p variants={fadeUp} className={styles['references-description']}>
                    Contact details are <span>hidden for privacy</span> — available on request.
                </motion.p>

                <motion.div variants={grid} className={styles['references-grid']}>
                    {references.map((ref) => (
                        <motion.div
                            key={ref.id}
                            className={styles['reference-card']}
                            variants={card}
                        >
                            <div className={styles['reference-blur-line']} style={{ width: '70%' }} />
                            <div className={styles['reference-blur-line']} style={{ width: '50%' }} />
                            <div className={styles['reference-blur-line']} style={{ width: '85%' }} />
                            <span className={styles['reference-label']}>{ref.role}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.button
                    variants={button}
                    className={styles['request-button']}
                    onClick={handleRequest}
                >
                    <Mail size={16} />
                    Request References
                </motion.button>
            </div>
        </motion.section>
    );
}

export default References;
