import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import NavBar from './components/Navbar/navbar.component';
import NavProvider from './provider/navbar/navbar.provider';
import DriverStandings from './pages/driver-standings/driver-standings';
import ConstructorStandings from './pages/constructor-standings/constructor-standings';
import DriversList from './pages/drivers-list/drivers-list';
import DriverCard from './pages/driver-card/driver-card';
import ConstructorCard from './pages/constructor-card/constructor-card';
import ConstructorsList from './pages/constructors-list/construtors-list';
import RaceResults from './pages/race-results/race-results';

function App() {
 
  return (
    <Router>
      <NavProvider>
        <NavBar />
      </NavProvider>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/driver_standings" element={<DriverStandings />} />
        <Route path="/constructor_standings" element={<ConstructorStandings />} />
        <Route path="/drivers_list" element={<DriversList />} />
        <Route path="/drivers_list/:driverId" element={<DriverCard />} />
        <Route path="/constructors_list" element={<ConstructorsList />} />
        <Route path="/constructors_list/:constructorId" element={<ConstructorCard />} />
        <Route path="/race_results/:circuitId" element={<RaceResults />} />
      </Routes>
    </Router>
  );
}

export default App;
