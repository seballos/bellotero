import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import './App.styl'

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
