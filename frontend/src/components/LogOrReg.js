import React from 'react'
import Login from './Login';
import Register from './Register';
import { useState } from 'react';


const LogOrReg = () => {
    const [currentForm, setCurrentForm] = useState('login');

const toggleForm = (formName) => {
  setCurrentForm(formName);}
return (
  <div className="Log_or_Reg">
  {
    currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
  }
  
</div>
  )
}

export default LogOrReg