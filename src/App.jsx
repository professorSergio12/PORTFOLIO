import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import MakeupArtistPage from './pages/MakeupArtistPage'
import WeddingPlannerPage from './pages/WeddingPlannerPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/makeup-artist" replace />} />
        <Route path="/makeup-artist" element={<MakeupArtistPage />} />
        <Route path="/wedding-planner" element={<WeddingPlannerPage />} />
      </Routes>
    </BrowserRouter>
  )
}
