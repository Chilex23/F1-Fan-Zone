import React from "react";
import NavBar from "../../components/Navbar/navbar.component";
import NavProvider from "../../provider/navbar/navbar.provider";

const ConstructorStandings = () => (
    <>
        <NavProvider>
            <NavBar />
            <h1 className="text-5xl uppercase font-extrabold top-20 relative text-center mb-8 mt-3">
                2022 Constructor's Standings
            </h1>
        </NavProvider>
    </>
);

export default ConstructorStandings;