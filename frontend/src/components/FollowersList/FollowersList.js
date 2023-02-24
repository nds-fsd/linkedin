import React, { useState, useEffect } from 'react'
import styles from './FollowersList.module.css'
import FollowSuggestCard from '../sidebar/FollowSuggest/followSuggestCard'
import { useParams } from "react-router-dom";
import { apiWrapper } from '../../utils/apiWrapper';



function FollowersList(props) {
    const {idUser} = useParams();
    const [data, setData] = useState({})
    const [followers,setFollowers] = useState([])
    const [followings,setFollowings] = useState([])

    useEffect(() => {
      apiWrapper("user/" + idUser).
      then((response) => {
        setData(response)
        setFollowers(response.followers)
        setFollowings(response.followings)
    })
   
    }, [])

    
     
   
    
  return (
    <div className={styles.block}>
    <h3> Followers </h3>
    <div> 
    </div>
    <h3> Followings </h3>    
    


    </div>
  )
}

export default FollowersList