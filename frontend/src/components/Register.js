import React, { useState } from 'react';
import "./logina.css";
import { apiWrapper } from "../utils/apiWrapper"
import Logo from "./logo"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { setUserSession } from "../utils/localStorage.utils"



const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
  
    const handleSuccessfulRegistration = (data) => {
        console.log(data)
        setUserSession(data)
        ;
      
      toast.success("You have successfully registered! Taking you to the Home page...", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      resetForm();
      setTimeout(() => {
        navigate("/home");
      }, 5000);
    };
  
    const resetForm = () => {
      setEmail("");
      setPassword("");
      setUsername("");
    };
  
    const handleUsername = (e) => {
      setUsername(e.target.value);
    };
  
    const handleEmail = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePassword = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      try {
        e.preventDefault();
        const response = await apiWrapper("user/register", "POST", {
          username: username,
          email: email,
          password: password,
        });
        const data = response.data;
        handleSuccessfulRegistration(data);
      } catch (error) {
        console.error(error);
        toast.error("An error has occurred. Please try again.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    };
  
    return (
      <>
        <nav className="navbar" onClick={() => navigate("/")}>
          <div className="navbar_logo">
            <Logo />
            <h2>JobLink</h2>
          </div>
          <div className="navbar_button">
            <button className="navbtn">Login</button>
          </div>
        </nav>
  
        <div className="auth-form-container">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
  
          <h2>Fill out the form and join JobLink</h2>
          <div className="register-form">
            <div className="reg-img">
              <img src="./img/Vector.png" alt="logo" />
            </div>
            <label htmlFor="username">Username</label>
  
            <input
              value={username}
              name="username"
              onChange={handleUsername}
              id="username"
              placeholder="Username"
            />
  
            <label htmlFor="email">Email</label>
  
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

                <button className="submit-button" type="submit" onClick={async () => {
                    try {
                        const response = await apiWrapper("user/register", "POST", {
                            username:username,
                            email:email,
                            password:password
                        });
                        const data =response.data

                        handleSuccessfulRegistration(data);
                        toast.success("Te has registrado correctamente! Ahora vamos a la Home.", {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        resetForm();
                        setUserSession(data);

                        setTimeout(() => {
                            navigate("/home");
                        }, 5000);
                    } catch (error) {
                        console.error(error);
                        toast.error("Ha ocurrido un error. Por favor, inténtalo de nuevo.", {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                }}>Registrarme</button>
                <br />
                <button
                    className="link-btn"
                    onClick={() => navigate("/")}
                >
                    Ya tengo una cuenta
                </button>
            </div>
        </div>
    </>
);
};

export default Register;


  