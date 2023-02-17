import React from "react";
import { Navigate, Link } from "react-router-dom";
import styles from "./navBar.module.css";
import Logo from "../logo"


const NavBar = (props) => {
  return (
    <>
        <nav className='navbar'>
          <Link to="/">
                 <div className='navbar_logo'>
                    <Logo />
                    <h2>JobLink</h2>
                </div></Link>
                <div className='navbar_button'>
                    {/* <button className='navbtn_unirse'>Unirse</button> */}
                    <button className='navbtn'>Iniciar Sesión</button>
                </div>
            </nav>
    </>
  );
};

export default NavBar;
