import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Locations from './pages/Locations.jsx'
import Victoria from './pages/Victoria.jsx'
import SouthAustralia from './pages/SouthAustralia.jsx'
import Queensland from './pages/Queensland.jsx'
import Buying from './pages/Buying.jsx'
import Selling from './pages/Selling.jsx'
import Transfer from './pages/Transfer.jsx'
import ContractReview from './pages/ContractReview.jsx'
import Quote from './pages/Quote.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import FAQ from './pages/FAQ.jsx'
import Blog from './pages/Blog.jsx'
import LocationSuburb from './pages/LocationSuburb.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-cream">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/victoria" element={<Victoria />} />
          <Route path="/south-australia" element={<SouthAustralia />} />
          <Route path="/queensland" element={<Queensland />} />
          <Route path="/buying" element={<Buying />} />
          <Route path="/selling" element={<Selling />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/contract-review" element={<ContractReview />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/:state/conveyancing-:suburb" element={<LocationSuburb />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
