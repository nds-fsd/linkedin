import React from "react";
import styles from  "./ProfileBar.module.css";
import { Avatar } from "@mui/material";

export const ProfileBar = (props) => {
  /*
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
*/
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__top}>
        <img src="./img/pexels-gradienta-6985001.jpg" alt="" />
        <Avatar className={styles.sidebar__avatar} img src="./img/bored_cats_club.jpg" />
        <h2>Jonny Stack</h2>
        <h3>FullCat Developer!            [Profile == {props.idUser}]</h3>
      </div>

      <div className={styles.sidebar__stats}>
        <div className={styles.sidebar__stat}>
          <p>Who viewed you</p>
          <p className={styles.sidebar__statNumber}>2,544</p>
        </div>
        <div className={styles.sidebar__stat}>
          <p>Views on post</p>
          <p className={styles.sidebar__statNumber}>2,344</p>
        </div>
      </div>
      <div className={styles.sidebar__bottom}>
        <p>Recent</p>
      </div>
    </div>
  );
};

export default ProfileBar;
