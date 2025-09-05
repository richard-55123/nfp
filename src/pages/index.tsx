import Hero from '../components/Hero'
import About from '../components/About'
import Parties from '../components/Parties'
// import Activities from './components/Activities'
import Contact from '../components/Contact'

function Index() {
      return (
            <>
                  <Hero />
                  <About />
                  <Parties />
                  {/* <Activities /> */}
                  <Contact />
            </>
      )
}

export default Index