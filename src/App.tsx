import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home.tsx'
import Closet from './pages/Closet.tsx'
import Preferences from './pages/Preferences.tsx'
import NotFound from './pages/NotFound.tsx'
import Outfit from './pages/Outfit.tsx'

function App() {


  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/closet" element={<Closet />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/outfit" element={<Outfit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
