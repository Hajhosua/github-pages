import Navbar from './components/Navbar';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from  './pages/Contact'
import Opinion from './pages/Opinion';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './App.css'

function App() {
 
  return (
    <>


    
    <Navbar/>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/opinion" element={<Opinion />} /> 


      </Routes>

    </>
    
  )
}


export default App
