import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import Coin from '../src/pages/Coins';
// import Favorites from './components/Favorites';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<Coin />} />
         
      
      </Routes>
    </Router>
  );
}

export default AppRoutes;
 {/* <Route path="/favorites" element={<Favorites />} /> */}
 {/* <Route path="/" element={<Root />}> */}