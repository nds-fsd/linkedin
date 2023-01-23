import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOption from '../inputOption/InputOption';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from '../post/Post';

const Feed = () => {
     const [input, setInput] = useState('')
     const [posts, setPosts] = useState([]);

     const [refresh, setRefresh] = useState(false);

     useEffect(() => {
       async function fetchData() {
         const response = await fetch('http://localhost:3001/post');
         const data = await response.json();
         setPosts(data);
       }
       fetchData();
       
     }, [refresh]);

     //---------------------//
     async function handlePost(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title: input, description: input, content: input, photoUrl: input })
        });
        const data = await response.json();
        console.log(data);
        setInput('')
        setRefresh(!refresh);
      }



  return (
    <div className='feed'>
        <div className='feed_inputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form onSubmit={handlePost}>
                <input value={input} 
                onChange={e=>setInput(e.target.value)}
                 type="text" placeholder='Start a post'/>
                  
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

        <div className='postmap'>
        {posts.map(({_id, title, description, content, photoUrl })=>( 
            <Post 
            key={_id}
            title={title}
            description={description}
            content={content}
            photoUrl={photoUrl} 
            />
            
)) }
        </div>
        </div>
  )
}

export default Feed