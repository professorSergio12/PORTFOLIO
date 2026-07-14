import { motion } from 'framer-motion'
import './BalloonField.css'

const BALLOON_COLORS = [
  '#ff5c8a',
  '#ff85b3',
  '#7ec8e3',
  '#5eb8e8',
  '#ffb347',
  '#c77dff',
  '#6ee7b7',
  '#f472b6',
]

const BALLOONS = [
  { left: 4, size: 46, delay: 0, duration: 16, drift: 28 },
  { left: 10, size: 38, delay: 2.5, duration: 14, drift: 22 },
  { left: 16, size: 52, delay: 5, duration: 18, drift: 35 },
  { left: 22, size: 40, delay: 1.2, duration: 15, drift: 18 },
  { left: 78, size: 44, delay: 0.8, duration: 16, drift: -26 },
  { left: 84, size: 36, delay: 3.5, duration: 14, drift: -20 },
  { left: 90, size: 50, delay: 6.2, duration: 17, drift: -32 },
  { left: 96, size: 38, delay: 2, duration: 15, drift: -24 },
  { left: 32, size: 34, delay: 4, duration: 13, drift: 8 },
  { left: 50, size: 40, delay: 7, duration: 16, drift: 0 },
  { left: 68, size: 36, delay: 5.5, duration: 14, drift: -10 },
  { left: 7, size: 32, delay: 8.5, duration: 15, drift: 30 },
  { left: 93, size: 34, delay: 9, duration: 16, drift: -28 },
  { left: 14, size: 42, delay: 11, duration: 17, drift: 24 },
  { left: 88, size: 40, delay: 10.5, duration: 18, drift: -22 },
]

function BalloonSvg({ color, size, id }) {
  const h = size * 1.28
  const shineId = `balloon-shine-${id}`
  return (
    <svg viewBox="0 0 48 64" fill="none" className="balloon-field__svg" width={size} height={h}>
      <ellipse cx="24" cy="22" rx="18" ry="21" fill={color} />
      <ellipse cx="24" cy="22" rx="18" ry="21" fill={`url(#${shineId})`} />
      <ellipse cx="17" cy="15" rx="5" ry="7" fill="white" opacity="0.4" />
      <path d="M24 42 L22 46 L26 46 Z" fill={color} />
      <line x1="24" y1="46" x2="24" y2="62" stroke="rgba(80,90,110,0.45)" strokeWidth="1.2" />
      <defs>
        <radialGradient id={shineId} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity="0.22" />
          <stop offset="100%" stopColor="black" stopOpacity="0.08" />
        </radialGradient>
      </defs>
    </svg>
  )
}

function Balloon({ left, size, color, delay, duration, drift, index }) {
  return (
    <motion.div
      className="balloon-field__balloon"
      style={{ left: `${left}%`, marginLeft: -size / 2 }}
      initial={{ top: '105%', x: 0, opacity: 0, rotate: left < 50 ? -8 : 8 }}
      animate={{
        top: ['105%', '92%', '8%', '-12%'],
        x: [0, drift * 0.35, drift, drift * 0.6],
        opacity: [0, 1, 1, 0],
        rotate: left < 50 ? [-8, 2, -4, 6] : [8, -2, 4, -6],
        scale: [0.75, 1, 1, 0.85],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        times: [0, 0.1, 0.88, 1],
        ease: 'easeInOut',
      }}
      aria-hidden="true"
    >
      <BalloonSvg color={color} size={size} id={index} />
    </motion.div>
  )
}

export default function BalloonField() {
  return (
    <div className="balloon-field" aria-hidden="true">
      {BALLOONS.map((cfg, i) => (
        <Balloon
          key={`${cfg.left}-${cfg.delay}`}
          left={cfg.left}
          size={cfg.size}
          color={BALLOON_COLORS[i % BALLOON_COLORS.length]}
          delay={cfg.delay}
          duration={cfg.duration}
          drift={cfg.drift}
          index={i}
        />
      ))}
    </div>
  )
}
