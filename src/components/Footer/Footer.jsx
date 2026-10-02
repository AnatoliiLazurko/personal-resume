//import React from 'react';
import styles from './FooterStyles.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-container']}>
                <p className={styles['footer-text']}>
                    &copy;2026 cv.anatolii
                </p>
            </div>
        </footer>
    );
}

export default Footer;
