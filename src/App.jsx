import React from 'react'
import Navbar from './Navbar';
import { Route, Router, Routes } from 'react-router-dom';

import About from "./Pages/About"
import Service from "./Pages/Service"
import FindAgent from "./Pages/FindAgent"
import Contact from "./Pages/Contact"
import Header from './Header';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

const App = () => {
  return (
    <div className=''>
    <Navbar/>

   
      <ScrollToTop/>

    <Routes>
      <Route path='/' element={<Header/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Service' element={<Service/>} />
      <Route path='/FindAgent' element={<FindAgent/>} />
      <Route path='/Contact' element={<Contact/>} />
    </Routes>
   
    <Footer/>

    </div>
  )
}

export default App
