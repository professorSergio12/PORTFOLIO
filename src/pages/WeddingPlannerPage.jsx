import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import decorReel from '../assets/wedding-planner/compressed/decor-reel.mp4'
import './WeddingPlannerPage.css'

export default function WeddingPlannerPage() {
  return (
    <main className="wedding-planner-page">
      <section className="wedding-planner-page__hero">
        <video
          src={decorReel}
          autoPlay
          muted
          loop
          playsInline
          className="wedding-planner-page__video"
        />
        <div className="wedding-planner-page__overlay" />
        <motion.div
          className="wedding-planner-page__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="section-label">Wedding Planner</p>
          <h1>Coming Soon</h1>
          <p>The wedding planner portfolio is being crafted with love.</p>
          <Link to="/makeup-artist" className="wedding-planner-page__link">
            View Makeup Artist Portfolio →
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
