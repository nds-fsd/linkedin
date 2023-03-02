import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "../inputOption/InputOption";
import ImageIcon from "@mui/icons-material/Image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "../post/Post";
import { tokenDecoder } from "../../utils/tokenDecoder";
import { apiWrapper } from "../../utils/apiWrapper";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const userId = tokenDecoder();

  // console.log(userId);

  //TODO Cambiar fetchData por api Wrapper

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
    }
    fetchData();
  }, [refresh]);


  async function handlePost(e) {
    e.preventDefault();
    let photoUrl = "";
    if (uploadingPhoto) {
      // if a photo is being uploaded, set the photoUrl to the uploaded photo
      photoUrl = await new Promise((resolve, reject) => {
        // simulate a delay of 2 seconds to show the loading spinner
        setTimeout(() => {
          resolve("https://via.placeholder.com/150");
        }, 2000);
      });
    }}

  function showUploadWidget() {
    console.log("showUploadWidget");
    const cloudinary = window.cloudinary;
    cloudinary.openUploadWidget(
      {
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
            textLight: "#FFFFFF",
          },
          fonts: {
            default: null,
            "'Poppins', sans-serif": {
              url: "https://fonts.googleapis.com/css?family=Poppins",
              active: true,
            },
          },
        },
      },
      (err, info, result) => {
        // console.log("info, err, result, reload", info, err, result, reload);
        if (!err && info && info.event === "success") {
          const newPhotoPost = info.info.secure_url;
          //   console.log("info, err, result, reload", info, err, result, reload);

          const body = { uploadphotos: newPhotoPost };
          apiWrapper("user/" + userId, "PATCH", body).then((res) => {
            console.log("refresh avatar", res);

            // setActualizar(!actualizar);
            // reloadPage();
          });
        }})}
  


  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form onSubmit={handlePost}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            />

            <button
              className="submitButton"
              onClick={() => console.log("hey")}
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={YouTubeIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>

      <div className="postmap">
        {posts.map((e) =>
          e.user[0] === userId ? (
            <Post
              photoUrl={user.avatar}
              name={user.nombre + " " + user.apellido}
              content={e.content}
              date={e.createdAt}
              // uploadphotos = {photouploaded}
            />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
