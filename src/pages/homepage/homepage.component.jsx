import React from 'react';
import NavBar from '../../components/Navbar/navbar.component';
import NavProvider from '../../provider/navbar/navbar.provider';

const HomePage = () => (
    <>  
        <NavProvider>
            <NavBar />
        </NavProvider>
    </>
);

export default HomePage;