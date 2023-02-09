import React, { useState,useEffect } from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'
import {apiWrapper} from "../../utils/apiWrapper"
import jwtDecode from "jwt-decode"


export const Sidebar = () => {
    const userSession = jwtDecode(window.localStorage.getItem('user-session'))
    const userId= (userSession.user_id)
    const [data,setData] = useState({})

    useEffect(() => {
       apiWrapper("user/"+userId)
       .then((response) => setData(response))
          }, [])

const fullName = data.nombre+" "+data.apellido
    

const recentItem =(topic) =>( 
    <div className='sidebar__recentItem'>
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
    </div>
)

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
        <img src="https://images.pexels.com/photos/6985184/pexels-photo-6985184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <Avatar className='sidebar__avatar' 
        img src="./img/bored_cats_club.jpg"/>

        <h2>{fullName ? fullName : "Usuario Sin Nombre"}</h2>
        <h3>FullCat Developer!</h3>
        </div>
        <div className='sidebar__stats'>
            
        <div className='sidebar__stat'>
            <p>Who viewed you</p>
            <p className='sidebar__statNumber'>2,544</p>
        </div> 
        <div className='sidebar__stat'>
        <p>Views on post</p>
            <p className='sidebar__statNumber'>2,344</p>

        </div>
        </div>
        <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
        </div>
        
        </div>
  )
}

export default Sidebar