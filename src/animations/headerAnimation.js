
export const ease = [0.2, 0.7, 0.2, 1]

export const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export const fromBottom = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

export const button = {
    hidden: { opacity: 0, scale: 0.8, y: 16 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 250, damping: 20 },
    },
}