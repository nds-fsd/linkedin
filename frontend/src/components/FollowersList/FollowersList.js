import React, { useState, useEffect } from 'react'
import styles from './FollowersList.module.css'
import FollowSuggestCard from '../sidebar/FollowSuggest/followSuggestCard'
import { useParams } from "react-router-dom";
import { apiWrapper } from '../../utils/apiWrapper';



function FollowersList(props) {
    const {idUser} = useParams(); 
    const [reload, setReload] = useState(false);
    const [followers, setFollowers] = useState([])
    const [followings, setFollowings] = useState([])
    const [followingIds, setFollowingIds] = useState([])
    
    
//TODO Condicional es seguido? hacer unfollow, no es seguido, hacer follow
    
        async function handleFollow(suggest){
        await apiWrapper("user/"+suggest+"/follows", "POST",{
        follower: idUser,
        }) ;
        setReload(!reload)

      }

      
      async function handleUnfollow(suggest){
      await apiWrapper("user/"+suggest+"/follows", "DELETE",{
       follower: idUser,
      }) ;
      
      setReload(!reload)
   
     }

    

    useEffect(() => {
      apiWrapper("user/" + idUser+"/followers").
      then((response) => {
        const updatedFollowers = response.map((follower) => {
          return {
            ...follower,
            isFollowing: followingIds.includes(follower._id)
          }
        })
        setFollowers(updatedFollowers)
      })
    }, [followingIds, idUser, reload])



    useEffect(() => {
      apiWrapper("user/" + idUser+"/followings").
      then((response) => {
        setFollowings(response)
        setFollowingIds(response.map((following) => following._id))
                
    })
   
    }, [idUser, reload])



    
     
   
    
  return (
    <div className={styles.block}>
    <h3> Followers </h3>
    <div className={styles.cards}> 

      {followers.map((e,index)=>{
        return (
        <div className={styles.card}>
        {e.isFollowing === true ? (<FollowSuggestCard key={index} avatar={e.avatar} name={e.nombre+" "+e.apellido} job={e.puesto} isFollowing={e.isFollowing} onClick={()=>{handleUnfollow(e._id)}} />) : (<FollowSuggestCard key={index} avatar={e.avatar} name={e.nombre+" "+e.apellido} job={e.puesto} isFollowing={e.isFollowing}  onClick={()=>{handleFollow(e._id)}} />) }  
    
        </div>
        )
      })} 
    </div>
    <h3> Followings </h3>
    <div className={styles.cards}> 

      {followings.map((e,index)=>{
        return (
        <div className={styles.card}>
        <FollowSuggestCard key={index} avatar={e.avatar} name={e.nombre+" "+e.apellido} job={e.puesto} isFollowing={true} onClick={()=>{handleUnfollow(e._id)}}/>
        </div>
        )
      })} 
    </div>    
    


    </div>
  )
}

export default FollowersList