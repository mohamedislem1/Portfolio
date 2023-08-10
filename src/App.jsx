import Nav from "./nav"
import Hero from "./hero"
import About from "./about"
import Skill from "./skills/skills"
import Projects from "./pojects/project"
import Contact from "./contact"
import Blob from "./blob"
function App() {
  return (
    <>
    <main className="pb-10 px-10 sticky">
    <Blob/>
    <Nav/>
    <Hero/>
    <About/>
    <Skill/>
    <Projects/>
    <Contact/>
    </main>
    </>

  )
}

export default App
