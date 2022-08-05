import React, { useContext, useEffect, useState } from 'react';
import { ReactComponent as Logo } from "../../assets/img/f1_logo.svg";
import { NavBarContext } from '../../provider/navbar/navbar.provider';
import StandingsMenuDropDown from '../standingsMenu/standingsMenu';
import DriverMenuDropDwn from '../DriverMenuDropDwn/driverMenuDropdwn.component';
import TeamsMenu from '../teams-menu/teams-menu.component';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const NavBar = () => {
    const { standHidden, 
            driverHidden, 
            teamHidden, 
            toggleStandHidden, 
            toggleDriverHidden, 
            toggleTeamHidden } = useContext(NavBarContext);

    const [navBarWidth, setNavBarWidth] = useState(window.innerWidth);
    const [navBarHidden, setNavBarHidden] = useState(true);

    const toggleNavBar = () => setNavBarHidden(!navBarHidden);

    useEffect(() => {
        function handleResize() {
            // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
            setNavBarWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
    });
    
    return (
        <>
            <div className="navbar bg-red-600 text-white fixed top-0 z-20 shadow-lg">
                <div className="flex-1">
                    <Logo className="w-20" />
                </div>
                <div className="flex-none">
                    { navBarWidth < 600 ? <div onClick={toggleNavBar} className="cursor-pointer">
                        {
                            navBarHidden ?
                            <GiHamburgerMenu className='text-4xl' />
                            : <IoCloseSharp className='text-4xl' />
                        
                        }

                    </div> :
                        <ul className="menu menu-horizontal p-0">
                            <li tabIndex="0">
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            
                            <li tabIndex="0">
                                <button onClick={toggleStandHidden}>
                                    Standings
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                                </button>
                            </li>
                            <li tabIndex="1">
                                <button onClick={toggleDriverHidden}>
                                    Drivers
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                                </button>
                            </li>
                            <li tabIndex="2">
                                <button onClick={toggleTeamHidden}>
                                    Teams
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                                </button>
                            </li>
                        </ul>
                    }
                </div>
            </div>
            {
                standHidden ? null : <StandingsMenuDropDown />
            }
            {
                driverHidden ? null : <DriverMenuDropDwn />
            }
            {
                teamHidden ? null : <TeamsMenu />
            }
          
        </>
    )    
};

export default NavBar;