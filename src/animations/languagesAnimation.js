
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
    visible: { transition: { staggerChildren: 0.2 } },
}

export const lang = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease,
            staggerChildren: 0.07, // інтервал між сегментами
            delayChildren: 0.25,   // сегменти стартують трохи після назви
        },
    },
}

export const dot = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { scaleX: 1, opacity: 1, transition: { duration: 0.35, ease } },
}