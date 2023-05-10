
import './App.css'
import "./components/header/header.component"
import Home from "./Pages/home/home"
import About from "./Pages/about/about"
import Portfolio from './Pages/portfolio/portfolio'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Notfound from './Pages/error/notfound404'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='*' element={<Notfound />} />


      </Routes>
    </Router>


  )
}

export default App
