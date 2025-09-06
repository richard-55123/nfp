import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function layouts() {
      return (
            <div className="App bg-nfp-white min-h-screen">
                  <Header />
                  <Outlet />
                  <Footer />
            </div>
      )
}

export default layouts
