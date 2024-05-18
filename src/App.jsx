import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import DoctorPage from './pages/DoctorPage';
import Home from './pages/Home';
import Location from './pages/Location';

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/dr-anup-gheewala" element={<DoctorPage />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/location" element={<Location/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
