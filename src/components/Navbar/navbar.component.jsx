import React, { useContext } from 'react';
import { ReactComponent as Logo } from "../../assets/img/f1_logo.svg";
import { NavBarContext } from '../../provider/navbar/navbar.provider';
import StandingsMenuDropDown from '../standingsMenu/standingsMenu';
import DriverMenuDropDwn from '../DriverMenuDropDwn/driverMenuDropdwn.component';
import TeamsMenu from '../teams-menu/teams-menu.component';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const { standHidden, 
            driverHidden, 
            teamHidden, 
            toggleStandHidden, 
            toggleDriverHidden, 
            toggleTeamHidden } = useContext(NavBarContext);
    
    return (
        <>
            <div className="navbar bg-red-600 text-white fixed top-0 z-20 shadow-lg">
                <div className="flex-1">
                    <Logo className="w-20" />
                </div>
                <div className="flex-none">
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