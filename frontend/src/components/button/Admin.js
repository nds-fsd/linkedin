import React from 'react'
import styles from "./Admin.module.css"
import { useNavigate } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings';

function Logout(props) {
    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate("/admin")
    }


  return (
    <div>
        <button className={styles.admin} onClick={() => handleClick()} >{props.content}<SettingsIcon className={styles.admin_icon}/></button>
    </div>
  )
}

export default Logout