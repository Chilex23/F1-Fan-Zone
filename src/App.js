import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/navbar.component";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import NavProvider from "./provider/navbar/navbar.provider";
import { ReactComponent as Logo } from "./assets/img/f1_logo.svg";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const DriverStandings = lazy(() =>
  import("./pages/driver-standings/driver-standings")
);
const ConstructorStandings = lazy(() =>
  import("./pages/constructor-standings/constructor-standings")
);
const DriversList = lazy(() => import("./pages/drivers-list/drivers-list"));
const DriverCard = lazy(() => import("./pages/driver-card/driver-card"));
const ConstructorCard = lazy(() =>
  import("./pages/constructor-card/constructor-card")
);
const ConstructorsList = lazy(() =>
  import("./pages/constructors-list/construtors-list")
);
const RaceResults = lazy(() => import("./pages/race-results/race-results"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center bg-red-600">
            <Logo className="w-20" />
          </div>
        }
      >
        <Router>
          <NavProvider>
            <NavBar />
          </NavProvider>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/driver_standings" element={<DriverStandings />} />
            <Route
              path="/constructor_standings"
              element={<ConstructorStandings />}
            />
            <Route path="/drivers" element={<DriversList />} />
            <Route path="/drivers/:driverId" element={<DriverCard />} />
            <Route path="/constructors" element={<ConstructorsList />} />
            <Route
              path="/constructors/:constructorId"
              element={<ConstructorCard />}
            />
            <Route path="/results/:circuitId" element={<RaceResults />} />
          </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
