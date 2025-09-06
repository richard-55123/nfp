// import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Headers from '../components/Headers'

function layouts() {
      return (
            <div className=''>
                  <Headers />
                  <Outlet />
                  <Footer />
            </div>
      )
}

export default layouts
