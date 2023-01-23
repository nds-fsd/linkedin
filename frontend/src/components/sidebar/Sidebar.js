import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'

export const Sidebar = () => {
const recentItem =(topic) =>( 
    <div className='sidebar__recentItem'>
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
    </div>
)

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
        <img src="./img/pexels-gradienta-6985001.jpg" alt="" />
        <Avatar className='sidebar__avatar' 
        img src="./img/bored_cats_club.jpg"/>

        <h2>Jonny Stack</h2>
        <h4>FullCat Developer!</h4>
        </div>
        <div className='sidebar__stats'>
            
        <div className='sidebar__stat'>
            <p>Who viewed you</p>
            <p className='sidebar__statNumber'>2,544</p>
        </div> 
        <div className='sidebar__stat'>
        <p>Views on post</p>
            <p className='sidebar__statNumber'>2,344</p>

        </div>
        </div>
        <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
        </div>
        
        </div>
  )
}

export default Sidebar