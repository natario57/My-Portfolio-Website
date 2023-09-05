import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Features />
        <About />
        <Portfolio />
        <Skills />
        <Services />
        <Testimonials />
        <Blog />
        <Contact />
        <Footer />
    </>
  )
}

export default App