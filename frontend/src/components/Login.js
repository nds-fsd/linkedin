import React from 'react';
import { useForm } from "react-hook-form";
import "./logina.css";
import Logo from "./logo"
import { useNavigate } from "react-router-dom";
import { setUserSession } from "../utils/localStorage.utils"

export const funcionZZ = (data) => {
    console.log(data);
    fetch("http://localhost:3001/user/login", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setUserSession(data);         
        });
};

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    
    const onSubmit = data => {
        funcionZZ(data);
        navigate("/home");
    };

    return (
        <>
            <nav className='navbar'>
                <div className='navbar_logo'>
                    <Logo />
                    <h2>JobLink</h2>
                </div>
                <div className='navbar_button'>
                    <button className='navbtn_unirse' onClick={() => navigate("/register")} >Unirse</button>
                    <button className='navbtn'>Iniciar Sesión</button>
                </div>
            </nav>
            <div className='big_container'>
                <div className='logoIntro'>
                    <img src="./img/isometric-home 1.png" alt='imagen' />
                </div>

                <div className="auth_form_container">
                    <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
                        <h1>Te damos <br></br>la bienvenida</h1>
                        <h3>La comunidad donde profesionales <br></br>connectan con profesionales</h3>
                        <input {...register("email", { required: true })} placeholder="Introduce tu correo electrónico" />
                        {errors.email && <span>error</span>}
                        <input type="password" {...register("password", { required: true })} placeholder="Introduce tu contraseña" />
                        {errors.password && <span>error</span>}
                        <button className="submit-button" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>

    )
}
export default Login