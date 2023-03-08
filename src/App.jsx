import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Aircrafts from "./pages/aircrafts/Aircrafts";
import Aircraft from "./pages/aircraft/Aircraft";
import Npcs from "./pages/npcs/Npcs";
import Npc from "./pages/npc/Npc";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {useState, useEffect} from 'react';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aircraft' element={<Aircraft />} />
          <Route path='/aircrafts' element={<Aircrafts />} />
          <Route path='/npc' element={<Npc />} />
          <Route path='/npcs' element={<Npcs />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
