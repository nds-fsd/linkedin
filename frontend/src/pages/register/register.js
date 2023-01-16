import React from 'react'
import "./register.css"
import Register from "../../components/Register"

const RegisterPage = () => {
    return (
      <>
        {/* <p>Login Page ...</p> */}
      <section className="register">
        <div className="registerForm">
        <Register/>
        </div>

      </section>
      </>
    );
  };
  
  export default RegisterPage;