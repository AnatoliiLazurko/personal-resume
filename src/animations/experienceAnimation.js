
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
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

export const fromLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
}

export const fromBottom = {
  hidden: { opacity: 0, y: -32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}