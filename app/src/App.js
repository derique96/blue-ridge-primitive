import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="site">
      <div className="site-content">
        <Router>
          <div className="App">
            <div>
              <Header />
            </div>
            <div>
              <Navbar />
            </div>
            <div></div>
              <Home />
            <Routes>
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;