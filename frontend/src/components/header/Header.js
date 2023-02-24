import React, { useState, useEffect } from "react";
import HeaderOption from "../header_option/Header_Option";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WorkIcon from "@mui/icons-material/Work";
import styles from "../header/Header.module.css";
import { tokenDecoder } from "../../utils/tokenDecoder";
import { apiWrapper } from "../../utils/apiWrapper";

const Header = () => {
  const userId = tokenDecoder();
  const [data, setData] = useState({});

  useEffect(() => {
    apiWrapper("user/" + userId).then((response) => setData(response));
  }, [userId]);

  const avatar = data.avatar;
  const anonimAvatar =
    "https://res.cloudinary.com/dkxlwv844/image/upload/v1676019494/Avatars%20Joblink/AvatarMaker_5_eaymit.png";

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__left}>
          <img src="/img/Vector.png" alt="ops" />
        </div>
        <div className={styles.header__search}>
          <img src="/img/search.svg" alt="search" />
          <input type="text" />
        </div>

        <div className={styles.header__right}>
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={WorkIcon} title="Jobs" />
          <HeaderOption Icon={BusinessCenterIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar={data.avatar ? avatar: anonimAvatar } title="me" />
        </div>
      </div>
    </>
  );
};

export default Header;
