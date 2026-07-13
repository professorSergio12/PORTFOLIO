import { motion } from 'framer-motion'
import './PillButton.css'

export default function PillButton({
  children,
  onClick,
  href,
  variant = 'outline',
  className = '',
}) {
  const classes = `pill-button pill-button--${variant} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
