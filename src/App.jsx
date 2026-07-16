import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import ScrollToTop from './components/common/ScrollToTop'
import HomePage from './pages/HomePage'
import MakeupArtistPage from './pages/MakeupArtistPage'
import WeddingPlannerPage from './pages/WeddingPlannerPage'
import BirthdayPlannerPage from './pages/BirthdayPlannerPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/makeup-artist" element={<MakeupArtistPage />} />
        <Route path="/wedding-planner" element={<WeddingPlannerPage />} />
        <Route path="/birthday-planner" element={<BirthdayPlannerPage />} />
      </Routes>
    </BrowserRouter>
  )
}
