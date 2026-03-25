import Navbar  from './components/layout/Navbar'
import Footer  from './components/layout/Footer'
import Hero    from './sections/Hero'
import About   from './sections/About'
import Skills  from './sections/Skills'
import Projects from './sections/Projects'
import Stats   from './sections/Stats'
import Contact from './sections/Contact'
import ScrollProgress from './components/ui/ScrollProgress'
import Certifications from './sections/Certifications'

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Stats />
        <Certifications/>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
