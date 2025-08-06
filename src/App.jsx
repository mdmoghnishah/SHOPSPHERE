import { useState } from 'react'

import './App.css'
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Support from './pages/Support';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Productitem from './pages/Productitem';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/productsitem" element={<Productitem/>} />
      </Routes>
  
    </>
  )
}

export default App
