import React from 'react'
import './followSuggestCard.css'
import { Avatar } from '@mui/material'




function FollowSuggestCard(props) {


  return (
    <div className='suggest-card'>
        <div className='left-side'>
        <Avatar sx={{ width: 60, height: 60 }} src={props.avatar}/>
       
        </div>
        <div className='center'>
            <h3>{props.name}</h3>
            <p>{props.job}</p>   
        </div>
        <div className='right-side'>
            <button onClick={props.onClick}>Follow</button>
        </div>
    </div>
  )
}

export default FollowSuggestCard