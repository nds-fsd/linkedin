import React, { useState,useEffect } from 'react'
import styles from "./Sidebar.module.css"
import { Avatar } from '@mui/material'
import {apiWrapper} from "../../utils/apiWrapper"
import FollowSuggest from "./FollowSuggest/followSuggest"

import {useNavigate} from "react-router-dom"
import { tokenDecoder } from '../../utils/tokenDecoder'

import Logout from "../logout/Logout"


export const Sidebar = () => {

    const navigate = useNavigate()  
    const userId= tokenDecoder()
    const [data,setData] = useState({})
    // const [reload, setReload] = useState(false);

    const followers = data?.followers?.length
    const followings = data?.following?.length

  

    useEffect(() => {
       apiWrapper("user/"+userId)
       .then((response) => setData(response))
          }, [userId])


const fullName = data.nombre+" "+data.apellido
const avatar = data.avatar
const anonimAvatar = "https://res.cloudinary.com/dkxlwv844/image/upload/v1676019494/Avatars%20Joblink/AvatarMaker_5_eaymit.png"
// console.log(data)    

const recentItem =(topic) =>( 
    <div className={styles.sidebar__recentItem}>
        <span className={styles.sidebar__hash}>#</span>
        <p>{topic}</p>
    </div>
  );
  
  const handleAvatarClick = () => {
    navigate(`/profile/${data._id}`);
  };

  const handleFollowersClick = () => {
    navigate(`/follows/${data._id}`);
  };

  return (

    <div className={styles.sidebar}>
        <div className={styles.sidebar__top}>
        <img src={"https://images.pexels.com/photos/6985184/pexels-photo-6985184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" />
        <Avatar className={styles.sidebar__avatar} 
        img src={data.avatar ? avatar: anonimAvatar }
        onClick={() => {
            handleAvatarClick();
          }}/>

        <h2>{data.nombre ? fullName : "Señor Anónimo"}</h2>
        <h3>{data.puesto ? data.puesto : "No tiene Curro"}</h3>
        
        
      {/*<Logout content="LOGOUT" />*/}

        </div>
      <div className={styles.sidebar__stats}>

        <div className={styles.sidebar__stat} onClick={()=>{handleFollowersClick()}}>
          
          <div >
            <h3>Followers</h3>
            <p>{followers}</p>
          </div>
          <div >
            <h3>Followings</h3>
            <p>{followings}</p>
          </div>

          {/* <p>Views on post</p>
          <p className="sidebar__statNumber">2,344</p> */}
        </div>
      </div>
      <div>
        <h3>Suggested Following</h3>
        {/* <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")} */}
        <FollowSuggest/>
      </div>
    </div>
  );
};

export default Sidebar;
