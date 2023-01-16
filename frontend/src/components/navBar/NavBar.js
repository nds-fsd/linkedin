import React from "react";

import styles from "./navBar.module.css";
import Logo from "../logo"


const NavBar = (props) => {
  return (
    <>
        <nav className='navbar'>
                <a href="http://localhost:3000/"><div className='navbar_logo'>
                    <Logo />
                    <h2>JobLink</h2>
                </div></a>
                <div className='navbar_button'>
                    {/* <button className='navbtn_unirse'>Unirse</button> */}
                    <button className='navbtn'>Iniciar Sesión</button>
                </div>
            </nav>
    </>
  );
};

export default NavBar;
