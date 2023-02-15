import React from 'react';
import { useForm } from "react-hook-form";
import "./logina.css";
import Logo from "./logo"
import { useNavigate } from "react-router-dom";
import { setUserSession } from "../utils/localStorage.utils"
import jwtDecode from "jwt-decode"
import { apiWrapper } from '../utils/apiWrapper';




export const Submit_register =(data,navigate) =>{
    
    console.log(data)
    
    
    
        apiWrapper("user/login/", "POST", data)
    
        
        
        
        .then(data => {
            setUserSession(data)
            const dataDecoded = jwtDecode(data);
            console.log(dataDecoded)
             
             if(dataDecoded.role === "user") return navigate("/home")
            if(dataDecoded.role ==="admin") return navigate("/admin")
                  
            
        })
        .catch((error)=>{
            console.log(error)})

}

const Login = () => {
    
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

   
    const onSubmit = (dataDecoded) => {
        // console.log(data)
        // setLoading(loading) // email y password
        Submit_register(dataDecoded,navigate)
     
    };


    return (
        <>
            <nav className='navbar'>
                <div className='navbar_logo'>
                    <Logo />
                    <h2>JobLink</h2>
                </div>

                <div className='navbar_button'>
                    <button className='navbtn_unirse'><a href="http://localhost:3000/register">Unirse</a></button>
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
                        {errors.email && <span className='error'>Introduce tu correo electrónico</span>}
                        <input type="password" {...register("password", { required: true })} placeholder="Introduce tu contraseña" />
                        {errors.password && <span className='error'>Introduce tu contraseña</span>}
                        <button className="submit-button" type="submit">Login</button>
                    </form>

                </div>

            </div>
        </>

    )
}
export default Login