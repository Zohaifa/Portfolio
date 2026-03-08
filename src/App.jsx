import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Others from './components/Others'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Others />
      <Footer />
    </div>
  )
}

export default App
