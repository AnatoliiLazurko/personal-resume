
export const ease = [0.2, 0.7, 0.2, 1]

export const viewport = {
  once: true,
  margin: '0px 0px -30% 0px', // тригер, коли секція піднялась на 25% висоти екрана
}

export const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

export const row = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export const item = {
    hidden: { opacity: 0, scale: 0.6, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 260, damping: 18 },
    },
}