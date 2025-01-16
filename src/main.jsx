import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Nav.jsx'
import Hero from './hero.jsx'
import Projects from './Prjs.jsx'
import Footer from './Footer.jsx'
import CustomCursor from './cursor.jsx'
import AnimatedGradient from './AnimatedGradient'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <AnimatedGradient /> */}
    <CustomCursor />
    <Nav />
    <Hero />
    <Projects />
    <Footer />
  </StrictMode>,
)
