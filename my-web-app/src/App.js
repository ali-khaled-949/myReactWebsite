import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import AdminPanel from './pages/AdminPanel';
import NavBar from './components/NavBar';
import GlobalStyles from './GlobalStyles';
import Shop from './pages/Shop';
import AboutUs from './pages/AboutUs'; // Make sure you have this import
import ContactUs from './pages/ContactUs'; // Make sure you have this import




function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <NavBar /> {/* This ensures the NavBar is displayed on all pages */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/product/:id" element={<ProductDetail />} /> {/* Product Detail Page */}
          <Route path="#" element={<AdminPanel />} /> {/* Admin Panel */}
          <Route path="/shop" element={<Shop />} /> {/* Admin Panel */}
          <Route path="/about" element={<AboutUs />} /> {/* Admin Panel */}
          <Route path="/contact" element={<ContactUs />} /> {/* Admin Panel */}
          {/* You can add more routes here as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
