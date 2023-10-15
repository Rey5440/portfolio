import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/home'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
