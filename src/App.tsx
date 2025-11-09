import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { FloatingActions } from './components/FloatingActions'
import { Home } from './pages/Home'
import { Programs } from './pages/Programs'
import { Plans } from './pages/Plans'
import { Gallery } from './pages/Gallery'
import { Contact } from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/about" element={<Navigate to="/programs" replace />} />
            <Route path="/classes" element={<Navigate to="/programs" replace />} />
            <Route path="/fees" element={<Navigate to="/plans" replace />} />
            <Route path="/demo" element={<Navigate to="/plans" replace />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  )
}

export default App

