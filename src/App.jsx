import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import WhereToBuy from './pages/WhereToBuy'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:slug" element={<ProductDetail />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/donde-comprar" element={<WhereToBuy />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
