import { Navigate} from "react-router-dom";
import jwtDecode from "jwt-decode"
import React from "react";


export  const PrivateRoutesAdmin = async ({children}) => {
  
  const userSession = window.localStorage.getItem('user-session')
  const tokenDecoded = jwtDecode(userSession)
  console.log(tokenDecoded)

    if(tokenDecoded.role === 'admin') return children 
    if (tokenDecoded.role ==='user') return children
    if(!tokenDecoded) return <Navigate to="/"/> //*TODO redirect si no hay token
    
   
  
  }




    





