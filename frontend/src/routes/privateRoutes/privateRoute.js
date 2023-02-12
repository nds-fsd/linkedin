import {Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode"

export  const PrivateRoutesAdmin = ({children}) => {

  const userSession = window.localStorage.getItem('user-session')
   const tokenDecoded =  userSession===null?"":jwtDecode(userSession)
  
  if(tokenDecoded === "") return <Navigate to ="/" replace/>

  if(tokenDecoded && !(children.type.name==='AdminPage' && tokenDecoded.role==='user')) {return children} 
  else {return <Navigate to ="/home" replace/>}
 
  
 
    
    
  
    
   

  }




    





