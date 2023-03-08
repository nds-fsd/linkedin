import React, { useEffect, useState } from "react";
import "./Header_Option.css";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logout from "../logout/Logout";
import Admin from "../button/Admin";
import { tokenDecoder } from "../../utils/tokenDecoder";
import jwtDecode from "jwt-decode";

export const HeaderOption = ({ avatar, Icon, title }) => {
  const navigate = useNavigate();
  const [stylesFlotante, setStylesFlotante] = useState("flotante_LogOut_Off");

  const userIdToken = tokenDecoder();

  const [role, setRole] = useState("");
  useEffect(() => {
    const userSession = jwtDecode(window.localStorage.getItem("user-session"));
    setRole(userSession.role);
  }, []);

  const handleClick = () => {
    switch (title) {
      case "Home":
        navigate("/home");
        break;

      case "My Network":
        navigate(`/follows/${userIdToken}`);
        break;

      case "Jobs":
        navigate(`/jobs/${userIdToken}`);
        break;
      case "me":
        setStylesFlotante("flotante_LogOut_On");

        const timer = setTimeout(() => {
          setStylesFlotante("flotante_LogOut_Off");
        }, 5000);

        break;
      default:
        navigate("/underConstruction");
        break;
    }
  };

  return (
    <div
      className="headerOption"
      onClick={() => {
        handleClick();
      }}
    >
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
      <div className={stylesFlotante}>
        {role === "admin" && <Admin content="ADMIN." />}
        <Logout content="LOGOUT" />
      </div>
    </div>
  );
};

export default HeaderOption;
