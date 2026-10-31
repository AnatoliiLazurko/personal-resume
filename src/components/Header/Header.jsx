//import React from 'react';
import { useEffect, useRef } from 'react';
import styles from './HeaderStyle.module.css';
import { Link } from "react-router";
import { motion } from 'motion/react';
import { ease, container, button, fromBottom } from '../../animations/headerAnimation';


const MotionLink = motion.create(Link)

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
        <motion.header
            className={styles.header}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
        >
            <div className={styles.container}>
                <div className={styles['header-content']}>
                    <motion.p variants={fromBottom} className={styles['header-title']}>cv.anatolii</motion.p>
                    <nav className={styles['header-nav']}>
                        <MotionLink
                            to="/"
                            variants={fromBottom}
                            whileHover={{ y: -1 }}
                            transition={{ duration: 0.3, ease }}
                        >Profile</MotionLink>
                        <MotionLink
                            to="/"
                            variants={fromBottom}
                            whileHover={{ y: -1 }}
                            transition={{ duration: 0.3, ease }}
                        >Experience</MotionLink>
                        <MotionLink
                            to="/"
                            variants={fromBottom}
                            whileHover={{ y: -1 }}
                            transition={{ duration: 0.3, ease }}
                        >Skills</MotionLink>
                        <MotionLink
                            to="/"
                            variants={fromBottom}
                            whileHover={{ y: -1 }}
                            transition={{ duration: 0.3, ease }}
                        >Education</MotionLink>
                        <MotionLink
                            to="/"
                            variants={fromBottom}
                            whileHover={{ y: -1 }}
                            transition={{ duration: 0.3, ease }}
                        >Interests</MotionLink>
                        <MotionLink
                            to="/"
                            variants={fromBottom}
                            whileHover={{ y: -1 }}
                            transition={{ duration: 0.3, ease }}
                        >Reference</MotionLink>
                    </nav>
                </div>
                <motion.div
                    variants={button}
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.3, ease }}
                    className={styles['contact-button']}
                >
                    CONTACT
                </motion.div>
            </div>

            <div className={styles['scroll-progress']} ref={progressRef} />
        </motion.header>
    );
}

export default Header;