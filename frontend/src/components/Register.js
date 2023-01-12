import React, {useState} from 'react';
import  "./logina.css";
import { apiWrapper } from "../utils/apiWrapper"
import Logo from "./logo"

const Register= (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setName] = useState('');
    const [surname, setSurname] =useState('')

    const handleName = (e)=>{
        setName(e.target.value);
        console.log(username)
        
    };
    const handleSurname = (e)=>{
        setSurname(e.target.value);
        
    };
    const handleEmail = (e)=>{
        setEmail(e.target.value);
        
    };
    const handlePassword = (e)=>{
        setPassword(e.target.value);
        
    };

    const handleSubmit = () => {
        const payload = {
          username: username,
          surname: surname,
          password: password,
          email: email,
          
        }
        
        return fetch('http://localhost:3001/user', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }).then(response => response.json());
      }
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(email);}
   
        return (
            
            <>   
            <nav className='navbar'> 
            <a href="http://localhost:3000/"><div className='navbar_logo'>
            <Logo/>
            <h2>JobLink</h2>
            </div></a>
            <div className='navbar_button'>
            {/* <button className='navbtn_unirse'>Unirse</button> */}
            <button className='navbtn'>Iniciar Sesión</button>
            </div>
            </nav>   

            <div className="auth-form-container">
                <h2>Rellena el formulario y únete a JobLink</h2>
            <form className="register-form" onSubmit={apiWrapper}>
            <div className='reg-img'>
            <img src="./img/Vector.png" alt="logo" />
            </div>
                <label htmlFor="name">Nombre</label>
                <input value={username} name="name" onChange={handleName} id="name" placeholder="Name" />
                <label htmlFor="name">Apellidos</label>
                <input value={surname} name="surname" onChange={handleSurname} id="surname" placeholder="Surname" />
                
                <label htmlFor="email">Correo electrónico</label>
                <input value={email} onChange={handleEmail}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Elige una contraseña</label>
                <input value={password} onChange={handlePassword} type="password" placeholder="********" id="password" name="password" />

                <button type="submit" onSubmit={handleSubmit}>Registrarme</button>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            </form>
           
        </div>
        </>
        )
    }
export default Register