
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Header from './components/Header'
import Comparison from './components/Comparison'
import Features from './components/Features'
import Calculator from './components/Calculator'
import StepsSection from './components/StepsSection'
import ReviewsSection from './components/ReviewsSection'
import Footer from './components/Footer'

import HowItWorks from './pages/HowItWorks'
import Prices from './pages/Prices'
import Help from './pages/Help'
import Bonuses from './pages/Bonuses'
import Blog from './pages/Blog'
import Shops from './pages/Shops'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Comparison />
              <Features />
              <Calculator />
              <StepsSection />
              <ReviewsSection />
            </>
          }
        />
        <Route path="/how" element={<HowItWorks />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/help" element={<Help />} />
        <Route path="/bonuses" element={<Bonuses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shops" element={<Shops />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App