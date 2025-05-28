import React from 'react'
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';

import About from "./Components/About"
import Service from "./Components/Service"
import Product from "./Components/Product"
import Contact from "./Components/Contact"
import Header from './Header';
import Footer from './Pages/Footer';

const App = () => {
  return (
    <div className=''>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Header/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Service' element={<Service/>} />
      <Route path='/Product' element={<Product/>} />
      <Route path='/Contact' element={<Contact/>} />
    </Routes>
    <Footer/>

    </div>
  )
}

export default App
