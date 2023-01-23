import React, { useState } from 'react';
import "./logina.css";
import { apiWrapper } from "../utils/apiWrapper"
import Logo from "./logo"



const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setName] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

      
    return (

        <>
            <nav className='navbar'>
                <a href="http://localhost:3000/"><div className='navbar_logo'>
                    <Logo />
                    <h2>JobLink</h2>
                </div></a>
                <div className='navbar_button'>
                    {/* <button className='navbtn_unirse'>Unirse</button> */}
                    <button className='navbtn'>Iniciar Sesión</button>
                </div>
            </nav>

            <div className="auth-form-container">
                <h2>Rellena el formulario y únete a JobLink</h2>
                <div className="register-form" >
                    <div className='reg-img'>
                        <img src="./img/Vector.png" alt="logo" />
                    </div>
                    <label htmlFor="username">Nombre de Usuario</label>

                    <input
                        value={username}
                        name="name"
                        onChange={handleName}
                        id="username"
                        placeholder="Nombre de usuario"
                    />

                    <label htmlFor="email">Correo electrónico</label>

                    <input
                        value={email}
                        onChange={handleEmail}
                        type="email"
                        placeholder="youremail@gmail.com"
                        id="email"
                        name="email"
                    />

                    <label htmlFor="password">Elige una contraseña</label>
                    <input value={password}
                        onChange={handlePassword}
                        type="password"
                        placeholder="********"
                        id="password"
                        name="password"
                    />

                    <button className="submit-button" type="submit" onClick={()=>{
                        apiWrapper(
                        "user/register", 
                        "POST", 
                         {
                            username:username,
                            email:email,
                            password:password

                        }
                        )
                        .then((payload)=>{
                            console.log(payload)
                        });
                        
                       
                    }
                        
                        }>Registrarme</button>
                    {/* <button
                        className="link-btn"
                        onClick={() => props
                        .onFormSwitch('login')}
                    >Already have an account? Login here.
                    </button> */}

                </div>

            </div>
        </>
    )
}
export default Register