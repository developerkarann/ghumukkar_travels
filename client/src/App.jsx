import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Blog from './pages/blog/Blog'
import Footer from './components/Footer'
import Hotels from './pages/hotels/Hotels'
import HotelDetails from './pages/hotelDetails/HotelDetails'
import Wishlist from './pages/wishlist/Wishlist'
import About from './pages/about/About'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Blog />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/hotel/:id' element={<HotelDetails />} />
          <Route path='/favorites' element={<Wishlist />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
        />

      </BrowserRouter>
    </>
  )
}

export default App
