import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOption from '../inputOption/InputOption';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from '../post/Post';
import { tokenDecoder } from '../../utils/tokenDecoder'
import { apiWrapper } from '../../utils/apiWrapper';

const Feed = () => {
     const [input, setInput] = useState('')
     const [posts, setPosts] = useState([]);
     const [user,setUser] = useState({})

     const [refresh, setRefresh] = useState(false);

      const userId= tokenDecoder()

      console.log(userId)

      //TODO Cambiar fetchData por api Wrapper

              
        
        useEffect(() => {
          async function fetchData() {
            const data = await apiWrapper('user/'+userId+'/posts');
            setPosts(data);
          }
          fetchData();
        }, [refresh]);

          // console.log(posts)
          // console.log(posts[0].user)
          


         
 


     useEffect(() => {
       async function fetchData() {
        const data = await apiWrapper('user/'+userId);
         setUser(data);
         
        //  console.log(user)
      
       }
       fetchData();
       
     }, [refresh]);
     

   

     

     //---------------------//
     async function handlePost(e) {
      e.preventDefault();
      const response = await
      
       apiWrapper("post/", "POST", 
       { title: input, description: input, 
        content: input, photoUrl: input } )


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
                  
                    <button className="submitButton" onClick={() => console.log('hey')} type="submit">Send</button>
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
        {posts.map((e)=>(e.user[0] === userId ? <Post photoUrl={user.avatar} name={user.nombre+" "+user.apellido} content={e.content} date={e.createdAt}/> : "")
          
        
            
            
            
            
            
) }
        </div>
        </div>
  )
}

export default Feed