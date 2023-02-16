import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import InputOption from '../inputOption/InputOption';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = ({name, date, content, photoUrl} ) => {
  return (
    
    <div className='post'>
        <div className='post__header'>
            <Avatar sx={{ width: 75, height: 75 }} src={photoUrl}/>
            <div className='post__info'>
        <h2 className="post_heading">{name} </h2>
        <p className='post_parraf'>{date} </p>
        </div>
        </div>
        <div className='divider'></div>
        <div className='post__body'>
            <p> {content} </p>
        </div>
        <div className='post_buttons'>
            <InputOption className="post_icon" Icon={ThumbUpIcon} title="Like" color="grey" />
            <InputOption className="post_icon" Icon={CommentIcon} title="Comment" color="grey" />
            <InputOption className="post_icon" Icon={ShareIcon} title="Share" color="grey" />
            <InputOption className="post_icon" Icon={SendIcon} title="Send" color="grey" />
        </div>
        </div>
        
  )
}

export default Post