export const weddingEase = [0.22, 1, 0.36, 1]

export const fadeUp = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: '-60px' },
  transition: { duration: 0.85, ease: weddingEase },
}

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: false, margin: '-40px' },
  transition: { duration: 0.8, ease: weddingEase },
}

export const imageReveal = {
  initial: { opacity: 0, scale: 1.08, filter: 'blur(10px)' },
  whileInView: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  viewport: { once: false, margin: '-50px' },
  transition: { duration: 1.1, ease: weddingEase },
}

export const clipRevealUp = {
  initial: { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
  whileInView: { opacity: 1, clipPath: 'inset(0% 0 0 0)' },
  viewport: { once: false, margin: '-40px' },
  transition: { duration: 1, ease: weddingEase },
}

export const slideFromLeft = {
  initial: { opacity: 0, x: -56 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, margin: '-50px' },
  transition: { duration: 0.9, ease: weddingEase },
}

export const slideFromRight = {
  initial: { opacity: 0, x: 56 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, margin: '-50px' },
  transition: { duration: 0.9, ease: weddingEase },
}

export const staggerChild = (index, base = 0.08) => ({
  transition: { delay: index * base, duration: 0.7, ease: weddingEase },
})
