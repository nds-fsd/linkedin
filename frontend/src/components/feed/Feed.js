import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOption from '../inputOption/InputOption';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
//import Post from './Post';

const Feed = () => {
     const [input, setInput] = useState('')
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
  

  return (
    <div className='feed'>
        <div className='feed_inputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                    <input value={input} onChange={e=>setInput(e.target.value)} type="text"/>
                    <button onClick={console.log('hey')} type="submit">Send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
                <InputOption Icon={YouTubeIcon} title="Video" color="#e7a33e" />
                <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
                <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e"/>
            </div>
        </div>

        {/* {posts.map(({id, data:{name, description, message, photoUrl} })=>( 
            <Post 
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            
            />
       )) } */}

        
        </div>
  )
}

export default Feed