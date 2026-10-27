import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Booking from './pages/Booking.jsx'
import Destinations from './pages/Destinations.jsx'
import Home from './pages/Home.jsx'
import MyBookings from './pages/MyBookings.jsx'
import NotFound from './pages/NotFound.jsx'
import PackageDetails from './pages/PackageDetails.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/packages/:id" element={<PackageDetails />} />
            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/bookings" element={<MyBookings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
