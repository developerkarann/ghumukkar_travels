import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import HotelDetails from './pages/hotelDetails/HotelDetails'
import Hotels from './pages/hotels/Hotels'
import Wishlist from './pages/wishlist/Wishlist'
import Tour from './pages/tours/Tour'

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
          <Route path='/tours' element={<Tour/>} />
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
