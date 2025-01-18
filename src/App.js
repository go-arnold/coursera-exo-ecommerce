import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import BlogList from './pages/BlogList';
import Contact from './pages/Contact';
import Testimonial from './pages/Testimonial';


/*import Header from './components/Header';*/
/*import Footer from './components/Footer';*/

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />        
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogList
 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonial" element={<Testimonial />} />
      </Routes>
      
    </Router>
  );
}

export default App;
