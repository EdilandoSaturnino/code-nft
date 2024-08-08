import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import { Home } from './pages/Home'

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
