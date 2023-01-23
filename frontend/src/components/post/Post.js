import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import InputOption from '../inputOption/InputOption';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = ({title, description, content, photoUrl} ) => {
  return (
    
    <div className='post'>
        <div className='post__header'>
            <Avatar />
            <div className='post__info'>
        <h2>{title} </h2>
        <p>{description} </p>

            </div>
        </div>
        <div className='post__body'>
            <p>{content} </p>
        </div>
        <div className='post_buttons'>
            <InputOption Icon={ThumbUpIcon} title="Like" color="grey" />
            <InputOption Icon={CommentIcon} title="Comment" color="grey" />
            <InputOption Icon={ShareIcon} title="Share" color="grey" />
            <InputOption Icon={SendIcon} title="Send" color="grey" />
        </div>
        </div>
        
  )
}

export default Post