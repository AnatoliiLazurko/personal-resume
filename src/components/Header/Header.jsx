//import React from 'react';
import styles from './HeaderStyle.module.css';
import { Link } from "react-router";


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles['header-content']}>
                    <p className={styles['header-title']}>cv.anatolii</p>
                    <nav className={styles['header-nav']}>
                        <Link to="/">Profile</Link>
                        <Link to="/">Experience</Link>
                        <Link to="/">Education</Link>
                        <Link to="/">Reference</Link>
                    </nav>
                </div>
                <div className={styles['contact-button']}>
                    CONTACT
                </div>
            </div>
        </header>
    );
}

export default Header;