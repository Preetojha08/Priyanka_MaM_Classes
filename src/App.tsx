import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { FloatingActions } from './components/FloatingActions'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Classes } from './pages/Classes'
import { Fees } from './pages/Fees'
import { Demo } from './pages/Demo'
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
            <Route path="/about" element={<About />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  )
}

export default App

