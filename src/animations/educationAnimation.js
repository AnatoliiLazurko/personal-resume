
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

export const timeline = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
}

export const line = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 1.1, ease } },
}

export const itemCard = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
}

export const marker = {
    hidden: { scale: 0 },
    visible: {
        scale: 1,
        transition: { type: 'spring', stiffness: 400, damping: 18 },
    },
}

export const cardIn = {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
}