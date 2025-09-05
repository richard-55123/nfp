import { Routes, Route } from 'react-router-dom'
import Index from './pages'
import layouts from './pages/layouts'

function App() {
  return (
    <Routes>
      <Route path="/" Component={layouts}>
        <Route index Component={Index} />
      </Route>
    </Routes>
  )
}

export default App