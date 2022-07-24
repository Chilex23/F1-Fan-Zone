import React, { useContext } from 'react';
import { ReactComponent as Logo } from "../../assets/img/f1_logo.svg";
import { NavBarContext } from '../../provider/navbar/navbar.provider';
import StandingsMenuDropDown from '../standingsMenu/standingsMenu';
import DriverMenuDropDwn from '../DriverMenuDropDwn/driverMenuDropdwn.component';
import TeamsMenu from '../teams-menu/teams-menu.component';

const NavBar = () => {
    const { standHidden, driverHidden, toggleStandHidden, toggleDriverHidden } = useContext(NavBarContext);
    console.log(standHidden, toggleStandHidden);
    return (
        <>
            <div className="navbar bg-red-600 text-white">
                <div className="flex-1">
                    <Logo className="w-20" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li tabIndex="0">
                            <button onClick={() => toggleStandHidden()}>
                                Standings
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </button>
                        </li>
                        <li tabIndex="1">
                            <button onClick={() => toggleDriverHidden()}>
                                Drivers
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </button>
                        </li>
                        <li tabIndex="2">
                            <button>
                                Teams
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </button>
                            <ul className="p-2 bg-stone-700">
                                <li><button>Submenu 1</button></li>
                                <li><button>Submenu 2</button></li>
                            </ul>
                        </li>
                        <li><button>Item 3</button></li>
                    </ul>
                </div>
            </div>
            {
                standHidden ? null : <StandingsMenuDropDown />
            }
            {
                driverHidden ? null : <DriverMenuDropDwn />
            }
            <TeamsMenu />
        </>
    )    
};

export default NavBar;