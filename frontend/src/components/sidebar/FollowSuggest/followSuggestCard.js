import React from 'react'
import styles from './followSuggestCard.module.css'
import { Avatar } from '@mui/material'




function FollowSuggestCard(props) {

  const buttonClassName= props.isFollowing ? styles.button_right_unfollow : styles.button_right_follow;


  return (
    <div className={styles.suggest_card}>
        <div className='left-side'>
        <Avatar sx={{ width: 60, height: 60 }} src={props.avatar}/>
       
        </div>
        <div className={styles.center}>
            <h3>{props.name}</h3>
            <p>{props.job}</p>   
        </div>
        <div className={styles.right_side}>
            <button className={buttonClassName} onClick={props.onClick}>{props.isFollowing  ? "Unfollow" : "Follow"}</button>
            
            
        </div>
    </div>
  )
}

export default FollowSuggestCard