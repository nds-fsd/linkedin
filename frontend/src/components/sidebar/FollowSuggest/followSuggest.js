import React, { useState, useEffect } from 'react'
import FollowSuggestCard from './followSuggestCard'
import './followSuggest.css'
import {apiWrapper} from "../../../utils/apiWrapper"
import { tokenDecoder } from '../../../utils/tokenDecoder'


function FollowSuggest() {

  
  const userId= tokenDecoder()
  const [data,setData] = useState({})
  const sector = data.sector
  

  
  

  
  

  useEffect(() => {
     apiWrapper("user/"+userId)
     .then((response) => setData(response))
        }, [userId])

        


  const [suggest, setSuggest]= useState([])

  
  
  
  useEffect(() => {
    apiWrapper("user/?sector="+sector)
    .then((response) => setSuggest(response))
       }, [sector])


        
  async function handleFollow(suggest){
   await apiWrapper("user/"+suggest._id+"/follows", "POST",{
    follower: userId,
   }) 

  }




  return (
    <div className='card-box'>

      { suggest.map((e=>
      e.nombre === undefined  || e._id === userId || data.following.includes(e._id) ? ("") : (<FollowSuggestCard key= {e.nombre+"_"+e.apellido} avatar={e.avatar} name={e.nombre+" "+e.apellido} job={e.puesto} onClick={()=>{handleFollow(e)}}/>) 

        
  
    
  ))}

      

             
        

    </div>
  )
}

export default FollowSuggest