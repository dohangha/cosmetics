import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/pages/About';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home />}  />
        <Route path='/services' element={<Services/>}  />
        <Route path='/products' element={<Products/>}  />
        <Route path='/about' element={<About/>}  />
        <Route path='/sign-up' element={<SignUp/>}  />
      </Routes>
    </Router>
    </>
  );
}

export default App;
