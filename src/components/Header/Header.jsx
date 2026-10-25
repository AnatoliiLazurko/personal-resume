//import React from 'react';
import { useEffect, useRef } from 'react';
import styles from './HeaderStyle.module.css';
import { Link } from "react-router";


const Header = () => {
    const progressRef = useRef(null)

    useEffect(() => {
        const updateProgress = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight
            const progress = scrollable > 0 ? window.scrollY / scrollable : 0

            if (progressRef.current) {
                progressRef.current.style.transform = `scaleX(${progress})`
            }
        }

        updateProgress()
        window.addEventListener('scroll', updateProgress, { passive: true })
        window.addEventListener('resize', updateProgress)

        return () => {
            window.removeEventListener('scroll', updateProgress)
            window.removeEventListener('resize', updateProgress)
        }
    }, [])

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

            <div className={styles['scroll-progress']} ref={progressRef} />
        </header>
    );
}

export default Header;