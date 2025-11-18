import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Champions from './components/Champions'
import Announcements from './components/Announcements'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'champions', 'announcements']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setCurrentSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      <Navigation currentSection={currentSection} scrollToSection={scrollToSection} />
      <Hero />
      <About />
      <Champions />
      <Announcements />
    </div>
  )
}

export default App

