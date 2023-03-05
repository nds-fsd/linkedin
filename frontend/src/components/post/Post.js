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

const addLike = async (idPost, idUser) => {
  //console.log(idPost)
  const update = { $addToSet: { likes: idUser } };
  try {
    const response = await apiWrapper(`post/${idPost}`, 'PATCH', update);
    console.log('got a like?', response);
  } catch (error) {
    console.error('Error adding like:', error);
  }
};


const Post = ({ name, date, content, photoUrl, postphotoUrl, likes, idPost, userId }) => {
  console.log('props:', content, likes, userId );
  const [likeCount, setLikeCount] = useState(likes.length);
    const handleLikeClick = () => {
    addLike(idPost, userId);
    setLikeCount(likeCount + 1);
  };

    useEffect(() => {
    setLikeCount(likes.length);
  }, []);

  
  return (
    <div className="post">
      <div className="post__header">
        <Avatar sx={{ width: 75, height: 75 }} src={photoUrl} />
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
        <InputOption
          className="post_icon"
          Icon={ThumbUpIcon}
          title="Like"
          color="grey"
          onClick={handleLikeClick}
        />
        <div>{likeCount ? likeCount : null}</div>
        <button onClick={handleLikeClick}> likes here</button>
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