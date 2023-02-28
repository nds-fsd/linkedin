import React, { useState, useEffect } from 'react'
import styles from './FollowersList.module.css'
import FollowSuggestCard from '../sidebar/FollowSuggest/followSuggestCard'
import { useParams } from "react-router-dom";
import { apiWrapper } from '../../utils/apiWrapper';



function FollowersList(props) {
    const {idUser} = useParams();
    const [followers, setFollowers] = useState([])
    const [followings, setFollowings] = useState([])
    

    useEffect(() => {
      apiWrapper("user/" + idUser+"/followers").
      then((response) => {
        setFollowers(response)
                
    })
   
    }, [])

    useEffect(() => {
      apiWrapper("user/" + idUser+"/followings").
      then((response) => {
        setFollowings(response)
                
    })
   
    }, [])



    
     
   
    
  return (
    <div className={styles.block}>
    <h3> Followers </h3>
    <div className={styles.cards}> 

      {followers.map((e,index)=>{
        return (
        <div className={styles.card}>
        <FollowSuggestCard key={index} avatar={e.avatar} name={e.nombre+" "+e.apellido} job={e.puesto} />
        </div>
        )
      })} 
    </div>
    <h3> Followings </h3>
    <div className={styles.cards}> 

      {followings.map((e,index)=>{
        return (
        <div className={styles.card}>
        <FollowSuggestCard key={index} avatar={e.avatar} name={e.nombre+" "+e.apellido} job={e.puesto} />
        </div>
        )
      })} 
    </div>    
    


    </div>
  )
}

export default FollowersList