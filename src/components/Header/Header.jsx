//import React from 'react';
import { useEffect, useRef, useState } from 'react';
import styles from './HeaderStyle.module.css';
import { motion } from 'motion/react';
import { ease, container, button, fromBottom } from '../../animations/headerAnimation';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { id: 'personal-profile', label: 'Profile' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'interests', label: 'Interests' },
    { id: 'references', label: 'Reference' },
]

const Header = () => {
    const progressRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

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

    const handleContact = () => {
        const to = import.meta.env.VITE_CONTACT_EMAIL
        const subject = 'Interested in your CV'
        const body = [
            'Hello Anatolii,',
            '',
            "I came across your CV and I'm interested in discussing a possible opportunity with you.",
            '',
            '[Please add details about the role here]',
            '',
            'Kind regards,',
        ].join('\r\n')

        const url =
            `https://mail.google.com/mail/?view=cm&fs=1` +
            `&to=${encodeURIComponent(to)}` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`

        window.open(url, '_blank', 'noopener,noreferrer')
    }


    // MENU FOR MOBILE

    useEffect(() => {
        const closeOnEscape = (e) => e.key === 'Escape' && setIsOpen(false)
        const closeOnDesktop = () => window.innerWidth > 820 && setIsOpen(false)

        window.addEventListener('keydown', closeOnEscape)
        window.addEventListener('resize', closeOnDesktop)
        return () => {
            window.removeEventListener('keydown', closeOnEscape)
            window.removeEventListener('resize', closeOnDesktop)
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

                    <nav
                        id="main-nav"
                        className={`${styles['header-nav']} ${isOpen ? styles['header-nav-open'] : ''}`}
                    >
                        <div className={styles['header-nav-inner']}>
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    variants={fromBottom}
                                    whileHover={{ y: -1 }}
                                    transition={{ duration: 0.3, ease }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </motion.a>
                            ))}

                            <motion.div
                                whileTap={{ scale: 0.97 }}
                                className={`${styles['contact-button']} ${styles['contact-button-mobile']}`}
                                onClick={() => {
                                    setIsOpen(false)
                                    handleContact()
                                }}
                            >
                                CONTACT
                            </motion.div>
                        </div>
                    </nav>
                </div>

                <div className={styles['header-actions']}>
                    <motion.div
                        variants={button}
                        whileHover={{ y: -1 }}
                        transition={{ duration: 0.3, ease }}
                        className={`${styles['contact-button']} ${styles['contact-button-desktop']}`}
                        onClick={handleContact}
                    >
                        CONTACT
                    </motion.div>

                    <motion.button
                        variants={button}
                        whileTap={{ scale: 0.92 }}
                        className={styles['menu-button']}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                        aria-controls="main-nav"
                    >
                        <motion.span
                            key={isOpen ? 'close' : 'open'}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            transition={{ duration: 0.25, ease }}
                            style={{ display: 'flex' }}
                        >
                            {isOpen ? <X size={22} color="#0c5df7" /> : <Menu size={22} color="#0c5df7" />}
                        </motion.span>
                    </motion.button>
                </div>
            </div>

            <div className={styles['scroll-progress']} ref={progressRef} />
        </motion.header>
    );
}

export default Header;