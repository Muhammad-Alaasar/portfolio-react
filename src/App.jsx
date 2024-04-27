import About from "./components/about/About"
import Hero from "./components/here/Hero"
import Services from "./components/services/Services"
import Navbar from "/src/components/navbar/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  )
}

export default App