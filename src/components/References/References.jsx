//import React from 'react';
import styles from './ReferencesStyles.module.css';
import { references } from '../../data/referencesData';
import { Mail } from 'lucide-react'

const References = () => {

    const handleRequest = () => {
        window.location.href = "mailto:Lazurko2005@gmail.com?subject=Reference Request&body=Hi, I would like to request references for Anatolii Lazurco."
    }

    return (
        <section className={styles.references}>
            <div className={styles['references-container']}>
                <div className={styles['references-header']}>
                    <span />
                    <p>References</p>
                    <span />
                </div>

                <p className={styles['references-description']}>
                    Contact details are <span>hidden for privacy</span> — available on request.
                </p>

                <div className={styles['references-grid']}>
                    {references.map((ref) => (
                        <div key={ref.id} className={styles['reference-card']}>
                            <div className={styles['reference-blur-line']} style={{ width: '70%' }} />
                            <div className={styles['reference-blur-line']} style={{ width: '50%' }} />
                            <div className={styles['reference-blur-line']} style={{ width: '85%' }} />
                            <span className={styles['reference-label']}>{ref.role}</span>
                        </div>
                    ))}
                </div>

                <button className={styles['request-button']} onClick={handleRequest}>
                    <Mail size={16} />
                    Request References
                </button>
            </div>
        </section>
    );
}

export default References;
