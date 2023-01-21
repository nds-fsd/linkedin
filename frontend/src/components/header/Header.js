import React from 'react'
import HeaderOption from '../header_option/Header_Option';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WorkIcon from '@mui/icons-material/Work';
import './Header.css'

const Header = () => {
  return (
    <>
        <div className='header'>
    
    <div className="header__left"> 
    <img src="./img/vector.png" alt="ops" />
    </div>
    <div className='header__search'>
        <img src="./img/search.svg" alt="search" />
        <input type="text" />
    
    </div>

    <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={WorkIcon} title="Jobs"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption avatar="./img/bored_cats_club.jpg" title="me"/>
    </div>
    </div>
    </>
  )
}


export default Header