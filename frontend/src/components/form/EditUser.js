import React, { useState } from 'react';
import styles from "../form/editUser.module.css"
import { apiWrapper } from '../../utils/apiWrapper';

const EditUser = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [name,setName] = useState('');
    const [surname, setSurname] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [company, setCompany] = useState('');
    const [role, setRole] = useState('');
    const [interest, setInterest] = useState('');
    

    const handleUserName = (e) => {
        setUserName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleSurname = (e) => {
        setSurname(e.target.value);
    };

    const handleCountry = (e) => {
        setCountry(e.target.value);
    };

    const handleCity = (e) => {
        setCity(e.target.value);
    };

    const handleCompany = (e) => {
        setCompany(e.target.value);
    };

    const handleRole = (e) => {
        setRole(e.target.value);
    };

    const handleInterest = (e) => {
        setInterest(e.target.value);
    };

  return (
    <div ><h2>New User</h2>
 <form className={styles.form}>
  <div>
    <label htmlFor="username">
    Nombre de Usuario   
<input
    type="text"
    value={username}
    name="username"
    onChange={handleUserName}
    id="username"
/></label> 
</div>
<div>
    <label htmlFor="name">
    Nombre  
<input
    type="text"
    value={name}
    name="name"
   onChange={handleName}
    id="username"
/></label> 
</div>

<div>
<label htmlFor="surname" className={styles.surname}>
    Appellidos  
<input label
    className={styles.surname}
    type="text"
    value={surname}
    name="appellidos"
   onChange={handleSurname}
    id="appellidos"
    
/> </label>
</div>

<div>
<label htmlFor="email">
    Correo electrónico  
<input
    type="email"
    value={email}
    name="email"
   onChange={handleEmail}
    id="email" 
/> </label>
</div>

<div>
<label htmlFor="password">
    Contraseña  
<input
    type="password"
    value={password}
    name="password"
   onChange={handlePassword}
    id="password"
    
/></label>
</div>

<div>
<label htmlFor="country">
    Páis  
<input
    type="text"
    value={country}
    name="country"
   onChange={handleCountry}
    id="contry"
    placeholder='Páis'
    
/></label>
</div>

<div>
<label htmlFor="city">
    Ciudad 
<input
    type="text"
    value={city}
    name="city"
   onChange={handleCity}
    id="city"
    placeholder='Ciudad'
    
/></label>
</div>

<div>
<label htmlFor="company">
    Empresa </label>
<input
    type="text"
    value={company}
    name="company"
   onChange={handleCompany}
    id="company"
    placeholder='Empresa'
    
/>
</div>

<div>
<label htmlFor="role">
    Cargo</label>
<input
    type="text"
    value={role}
    name="role"
   onChange={handleRole}
    id="role"
    placeholder='Cargo'
    
/>
</div>

<div>
<label htmlFor="interest">
    Intereses </label>
<input
    type="text"
    value={interest}
    name="interest"
    onChange={handleInterest}
    id="interest"
    placeholder='Intereses'
    
/>
</div>

<button  type="submit" onClick={()=>{
                        apiWrapper(
                        "user", 
                        "PATCH", 
                         {
                            username:username,
                            email:email,
                            password:password,
                            name,name,
                            surname,surname,
                            country,country,
                            city, city,
                            company, company,
                            role, role,
                            interest, interest

                        })
                       
                    }
                        }>Submit</button>
</form>
    </div>
  )
}

export default EditUser