import { Routes, Route } from 'react-router-dom'
import Index from './pages'
import layouts from './pages/layouts'
import Parti from './pages/partis'

function App() {
  return (
    <Routes>
      <Route path="/" Component={layouts}>
        <Route index Component={Index} />
        <Route path='/partis' element={<Parti/>}/>
      </Route>
    </Routes>
  )
}

export default App