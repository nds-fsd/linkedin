import React, { useState,useEffect } from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'
import {apiWrapper} from "../../utils/apiWrapper"
import jwtDecode from "jwt-decode"
import {useNavigate} from "react-router-dom"
import LogoutIcon from '@mui/icons-material/Logout';


export const Sidebar = () => {
    
    const navigate = useNavigate()
    const userSession = jwtDecode(window.localStorage.getItem('user-session'))
    const userId= (userSession.user_id)
    const [data,setData] = useState({})

    const logOutUser = () =>{
        window.localStorage.removeItem('user-session')
        navigate("/")
    }

    useEffect(() => {
       apiWrapper("user/"+userId)
       .then((response) => setData(response))
          }, [])


const fullName = data.nombre+" "+data.apellido
const avatar = data.avatar
const anonimAvatar = "https://res.cloudinary.com/dkxlwv844/image/upload/v1676019494/Avatars%20Joblink/AvatarMaker_5_eaymit.png"
    

const recentItem =(topic) =>( 
    <div className='sidebar__recentItem'>
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
    </div>
)

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
        <img src={"https://images.pexels.com/photos/6985184/pexels-photo-6985184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" />
        <Avatar className='sidebar__avatar' 
        img src={data.avatar ? avatar: anonimAvatar }/>

        <h2>{data.nombre ? fullName : "Señor Anónimo"}</h2>
        <h3>FullCat Developer!</h3>
        <button className='logOut' onClick={logOutUser}>LOGOUT <LogoutIcon className='logout-icon'/></button>
        {/* <span onClick={logOutUser}>Logout</span> */}
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