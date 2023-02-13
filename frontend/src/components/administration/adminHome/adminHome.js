import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom"

const AdminHome = (props) => {

  const navigate = useNavigate();
  
  useEffect(()=>{

    navigate("/home");
  },[navigate]);

  return (
<></>
  );
};

export default AdminHome;
