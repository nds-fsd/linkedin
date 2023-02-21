import React from 'react'
import './followSuggestCard.css'




function FollowSuggestCard(props) {


  return (
    <div className='suggest-card'>
        <div className='left-side'>
            <div className='picture'>.</div>
        </div>
        <div className='center'>
            <h3>{props.name}</h3>
            <p>{props.job}</p>   
        </div>
        <div className='right-side'>
            <button>Follow</button>
        </div>
    </div>
  )
}

export default FollowSuggestCard