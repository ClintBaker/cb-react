import './App.css'
import About from './components/about'
import Contact from './components/contact'
import Hero from './components/hero'
import Navi from './components/nav'
import Portfolio from './components/portfolio'

function App() {
  return (
    <main className="bg-gray-100">
      <Navi />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}

export default App
