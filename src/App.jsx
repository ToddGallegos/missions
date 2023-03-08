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

  const getAircrafts = async () => {
    const response = await fetch("http://localhost:5000/aircrafts");
    const data = await response.json();
    return data
  }

  const getNpcs = async () => {
    const response = await fetch("http://localhost:5000/npcs");
    const data = await response.json();
    return data
  }

  const [aircrafts, setAircrafts] = useState([])
  const [user, setUser] = useState([])
  const [npcs, setNpcs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const inventory = await getAircrafts();
      setAircrafts(inventory);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const inventory = await getNpcs();
      setNpcs(inventory);
    };
    fetchData();
  }, []);


  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aircraft' element={<Aircraft aircrafts={aircrafts}/>} />
          <Route path='/aircrafts' element={<Aircrafts aircrafts={aircrafts}/>} />
          <Route path='/npc' element={<Npc  npcs={npcs} setNpcs={setNpcs}/>} />
          <Route path='/npcs' element={<Npcs npcs={npcs} setNpcs={setNpcs}/>} />
          <Route path='/signin' element={<Signin setUser={setUser} user={user}/>} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
