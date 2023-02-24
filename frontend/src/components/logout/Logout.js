import React from 'react'
import "./Logout.css"
import { useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';

function Logout(props) {
    const navigate = useNavigate()

    const handleClick = ()=>{
        window.localStorage.removeItem("user-session")
        navigate("/")
    }


  return (
    <div>
        <button className='logout' onClick={() => handleClick()} >{props.content}<LogoutIcon className='logout-icon'/></button>
    </div>
  )
}

export default Logout