import React from 'react'
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Error from './pages/Error';
import DesktopNav from './layout/DesktopNav';
import PageLoader from './components/PageLoader';
import Compare from './pages/Compare'
import { Routes, Route } from 'react-router-dom';
import MobileNav from './layout/MobileNav';
import DynamicProduct from './pages/DynamicProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div> 
      <PageLoader />
      <DesktopNav />
      <MobileNav />
      <ToastContainer />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/products/:product' element={<DynamicProduct />}  />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Compare' element={<Compare />} />
          <Route path='/*' element={<Error />} />

      </Routes>
    </div>
  )
}

export default App