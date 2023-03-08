import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {useState, useEffect} from 'react';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
