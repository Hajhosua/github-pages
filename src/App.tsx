import Navbar from './components/Navbar';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from  './pages/Contact'

import './App.css'

function App() {
 
  return (
    <>


    
    <Navbar/>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
    
  )
}


export default App
