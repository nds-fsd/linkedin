import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import './Widget.css'

const Widget = () => {
  return (
    <div className='widgets'>
         <div className='widgets__header'>
        <h2>JobLink News</h2>
       
        <InfoIcon />
       
        </div>
        <div>
        <p>Microsoft is Hiring</p>
        </div>
        <div>
        <p>Google is Hiring</p>
        </div>
        {/* {newsArticle("Microsoft is hiring!")} */}
        </div>
  )
}

export default Widget