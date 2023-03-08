import React, { useState, useEffect } from 'react';
import "./Post.css"
import { Avatar } from '@mui/material';
import InputOption from '../inputOption/InputOption';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
//import Box from '@mui/material/Box';
import { apiWrapper } from '../../utils/apiWrapper';
import {useNavigate} from "react-router-dom";


const addLike = async (postId, userId) => {
  //console.log(idPost)
  const update = { $addToSet: { likes: userId } };
  try {
    const response = await apiWrapper(`post/${postId}`, 'PATCH', update);
    console.log('got a like?', response);
    return response.likes
  } catch (error) {
    console.error('Error adding like:', error);
  }
};

const removeLike = async (postId, userId) => {
  //console.log(idPost)
  const update = { $pull: { likes: userId } };
  try {
    const response = await apiWrapper(`post/${postId}`, 'PATCH', update);
    console.log('got a like?', response);
    return response.likes
  } catch (error) {
    console.error('Error adding like:', error);
  }
};



const Post = ({ name, date, content, photoUrl, postphotoUrl, likes, postId, userId,user, updateLikes }) => {
  const  navigate =useNavigate();
  const handleAvatarClick= ()=>{
  navigate(`/profile/${user._id}`);
  };

  console.log('props:', content, likes,"user:",userId, "post:",postId );
  const [likeCount, setLikeCount] = useState(likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = async () => {
    setIsLiked(true);
    if (likes.includes(userId)) {
      removeLike(postId, userId)
      const newLikes = likes.filter((like) => like !== userId);
      updateLikes(newLikes);
    } else {
      addLike(postId, userId);
      const newLikes = [...likes, userId];
      updateLikes(newLikes);
    }
  };
    useEffect(() => {
    setLikeCount(likes.length) ;   
  }, [likes]);

  useEffect(() => { 
    setIsLiked(likes.includes(userId));
  },[]);

  
  return (
    <div className="post">
      <div className="post__header">
        <Avatar sx={{ width: 75, height: 75 }} src={photoUrl}  onClick={()=>{handleAvatarClick();}}/>
        <div className="post__info">
          <h2 className="post_heading">{name} </h2>
          <p className="post_parraf">{date} </p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="post__body">
        <p> {content} </p>
        {postphotoUrl !== null && (
          <img width="200" height="200" src={postphotoUrl} alt="" />
        )}
      </div>
      <div className="post_buttons">
                {/* <div></div> */}
        <button className="likebtn" onClick={handleLikeClick}>    <InputOption
          className="post_icony"
          Icon={ThumbUpIcon}
          title="Like"
          color={isLiked ? "green" : "grey"}
          onClick={handleLikeClick}
        />
        
        {likeCount > 0 && <span className='like'>{likeCount ? likeCount : null}</span>}
        
        
        
        
        </button>
        <InputOption
          className="post_icon"
          Icon={CommentIcon}
          title="Comment"
          color="grey"
        />
        <InputOption
          className="post_icon"
          Icon={ShareIcon}
          title="Share"
          color="grey"
        />
        <InputOption
          className="post_icon"
          Icon={SendIcon}
          title="Send"
          color="grey"
        />
      </div>
    </div>
  );
};

export default Post;