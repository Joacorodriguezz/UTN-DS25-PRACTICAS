import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fiction from './pages/Fiction';
import ScienceFiction from './pages/ScienceFiction';
import Mystery from './pages/Mystery';
import Romance from './pages/Romance';
import Contact from './pages/Contact';
import Registration from './pages/Registration';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ficcion" element={<Fiction />} />
            <Route path="/ciencia-ficcion" element={<ScienceFiction />} />
            <Route path="/misterio" element={<Mystery />} />
            <Route path="/romance" element={<Romance />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

