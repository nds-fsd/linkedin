import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogOut = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.removeItem("user-session");
    navigate("/");
  }, [navigate]);

  return <></>;
};

export default AdminLogOut;
