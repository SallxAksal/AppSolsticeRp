import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Rules from './pages/Rules'
import Jobs from './pages/Jobs'
import Play from './pages/Play'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/play" element={<Play />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
