import { useEffect, useState } from 'react'
import './App.css'
import Icon from './assets/logo-icon.webp';
import Word from './assets/logo-word.webp';
import Header from './components/header/header'
import Home from './components/body/home/Home'
import About from './components/body/about/About'
import Services from './components/body/services/services'
import Contact from './components/body/contact/contact'
import Footer from './components/footer/footer'
import MobileNav from "./components/MobileNav";



function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500) // splash duration (2.5 seconds)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="splash-screen">
        <img
          src={Icon}
          alt="Dental Pro Logo"
          className="splash-logo1"
        />
        <img
          src={Word}
          alt="Dental Pro Logo"
          className="splash-logo2"
        />
      </div>
    )
  }

  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />

      <MobileNav />
    </>
  )
}

export default App
