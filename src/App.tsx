import { Routes, Route } from 'react-router-dom'
import Index from './pages'
import layouts from './pages/layouts'
import Parti from './pages/partis'
import Contact from './pages/contact'
import Evenment from './pages/event'
import AboutNFP from './pages/About'

function App() {
  return (
    <Routes>
      <Route path="/" Component={layouts}>
        <Route index Component={Index} />
        <Route path='/partis' element={<Parti />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/evenements' element={<Evenment />} />
        <Route path='/about' element={<AboutNFP />} />
      </Route>
    </Routes>
  )
}

export default App