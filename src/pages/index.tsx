import Hero from '../components/Hero'
import About from '../components/About'
import Parties from '../components/Parties'
import Contact from '../components/Contact'
import FuturePlanSection from '../components/FuturePlanSection'
// import Activities from '../components/Activities'

function Index() {
      return (
            <>
                  <Hero />
                  <About />
                  <Parties />
                  <FuturePlanSection/>
                  {/* <Activities /> */}
                  <Contact />
            </>
      )
}

export default Index