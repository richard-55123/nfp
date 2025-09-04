import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Parties from './components/Parties'
// import Activities from './components/Activities'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App bg-nfp-white min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Parties />
            {/* <Activities /> */}
            <Contact />
          </>
        } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App