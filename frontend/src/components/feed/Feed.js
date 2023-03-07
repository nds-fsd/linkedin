import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import SendIcon from '@mui/icons-material/Send';
import InputOption from "../inputOption/InputOption";
import ImageIcon from "@mui/icons-material/Image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "../post/Post";
import { tokenDecoder } from "../../utils/tokenDecoder";
import { apiWrapper } from "../../utils/apiWrapper";
//import { AdvancedImage } from '@cloudinary/react';
//import { Avatar, SvgIcon } from "@mui/material";
//import Image from "@mui/icons-material/Image";
import Button from '@mui/icons-material/AddPhotoAlternateOutlined';

const Feed = () => {


  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
 // const [uploadingPhoto, setUploadingPhoto] =useState(false)
  const [postphotoUrl, setPostphotoUrl] = useState("");
  const [refresh, setRefresh] = useState(false);

const [allposts,setAllPosts] = useState([])
const [followings,setFollowings] =useState([])
const [filteredPost, setFilteredPost] = useState([])

const anonimAvatar = "https://res.cloudinary.com/dkxlwv844/image/upload/v1676019494/Avatars%20Joblink/AvatarMaker_5_eaymit.png" 
  const userId = tokenDecoder();

  // console.log(userId);




  useEffect(() => {
    apiWrapper("post")
    .then ((res)=>{setAllPosts(res)})
       
  }, [refresh])

 



  
  

  useEffect(() => {
    async function fetchData() {
      const data = await apiWrapper("user/" + userId + "/posts");
      setPosts(data);
    }
    fetchData();
  }, [refresh]);

  useEffect(() => {
    async function fetchData() {
      const data = await apiWrapper("user/" + userId);
      setUser(data);
      setFollowings(data.following)
    }
    fetchData();
  }, [refresh]);



//TODO cambiar por allposts

  useEffect(() => {
    
    const filtered = allposts.filter(
      (post) =>
      post?.user[0]?._id === userId || followings.includes(post?.user[0]?._id)
      
        
    );
    setFilteredPost(filtered);
  }, [allposts, userId, followings]);

  
 
 
 
  


  function showUploadWidget2 () {
    // console.log('showUploadWidget');
    const cloudinary =  window.cloudinary;
    cloudinary.openUploadWidget ({ 
      cloudName: "dkqlgumn7",  
      uploadPreset: "joblinkup", 
      sources: ["local", "camera"],
      googleApiKey: "<image_search_google_api_key>",
      showAdvancedOptions: false,
      cropping: false,
      multiple: false,
      defaultSource: "local",
      styles: {
        palette: {
          window: "#F5F5F5",
          sourceBg: "#FFFFFF",
          windowBorder: "#90a0b3",
          tabIcon: "#0094c7",
          inactiveTabIcon: "#69778A",
          menuIcons: "#0094C7",
          link: "#53ad9d",
          action: "#8F5DA5",
          inProgress: "#0194c7",
          complete: "#53ad9d",
          error: "#c43737",
          textDark: "#000000",
          textLight: "#FFFFFF"
        },
        fonts: {
          default: null,
          "'Poppins', sans-serif": {
            url: "https://fonts.googleapis.com/css?family=Poppins",
            active: true
          }
        }
      }
    }, 
    (err, info,result) => {
     // console.log("info, err, result, reload", info, err, result, reload);
      if (!err && info && info.event === "success") {
       
        const phototoup = info.info.secure_url;
        setPostphotoUrl(phototoup)
        // console.log(setPostphotoUrl)
        // console.log(phototoup)


     //   console.log("info, err, result, reload", info, err, result, reload);
  
  
        //const body = { avatar: newAvatarUrl };
       // apiWrapper("user/" + userId, "PATCH", body)
       //  .then((res) => {
       //     console.log("refresh avatar", res);
               // });
       }
       setRefresh(!refresh);
    });
  }


  async function handlePost(e) {
    e.preventDefault();
  //  setUploadingPhoto(true);
    const photoupping = postphotoUrl
    const response = await apiWrapper("post/", "POST", {
     // title: input,
     // description: input,
      content: input,
      photoUrl: input,
      postphotoUrl: photoupping,
      userId: userId,
      likes:[]
    });
    // const data = await response.json();
    // console.log(data);
    setInput("");
    setPostphotoUrl("");
    setRefresh(!refresh);

    
  }

  return (
    <div className="feed">
      <div className="feed_inputContainer">
      <form onSubmit={handlePost} className="feed__form">
  <div className="feed__input">
    <CreateIcon />
    <input
      type="text"
      placeholder={`What's on your mind, ${user.nombre}?`}
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
      <Button
      className="btn_image"
      variant="contained"
      startIcon={<ImageIcon fontSize="large" />}
      onClick={() => showUploadWidget2()}
    >
      Photo
    </Button>
     <button className="submitButton" type="submit"><SendIcon/></button>
     
     
  </div>
  <div className="feed__photo">
   
  </div>
  <div className="feed__options">
   
  </div>
  <div>
   
  </div>
</form>
       
      </div>

      <div className="postmap">
        {filteredPost.map((e) =>
           (
            <Post
              photoUrl={e.user[0].avatar ? (e.user[0].avatar) : (anonimAvatar)}
              name={e.user[0].nombre + " " + e.user[0].apellido}
              content={e.content}
              postphotoUrl={e.postphotoUrl ? e.postphotoUrl : null}
              date={e.createdAt}
              likes={e.likes}
              userId = {userId}
              postId ={e._id}
             
            />
          ) 
        )}
      </div>
    </div>
  );
};

export default Feed;
