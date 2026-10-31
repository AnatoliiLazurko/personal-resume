
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

export const grid = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
}

export const card = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, ease },
    },
}

export const button = {
    hidden: { opacity: 0, scale: 0.8, y: 16 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
}