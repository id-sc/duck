// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from './MainLayout';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Cupcakes from './Cupcakes';
import Shops from './Shops';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cupcakes" element={<Cupcakes />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/contact" element={<Contact />} />
          <Route index element={<Navigate to="/home" />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
