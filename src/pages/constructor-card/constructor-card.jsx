import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/Navbar/navbar.component";
import NavProvider from "../../provider/navbar/navbar.provider";

const ConstructorCard = () => {
    const { constructorId } = useParams();
    return (
        <>
            <NavProvider>
                <NavBar />
                <h1 className="text-5xl uppercase font-extrabold top-20 relative text-center mb-8 mt-3">
                    { constructorId } Card
                </h1>
            </NavProvider>
        </>
    );
}

export default ConstructorCard;