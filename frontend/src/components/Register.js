import React from "react";
import { useForm } from "react-hook-form";
import "./logina.css";
import { apiWrapper } from "../utils/apiWrapper";
import Logo from "./logo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Submit_register } from "./Login";


const Register = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleSuccessfulRegistration = (data) => {
    console.log(data)
    Submit_register({ ...data, nombre:data.nombre, password: data.password }, useNavigate);
    toast.success("Registrado Correctamente! Vamos a la Home page...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
   
    setTimeout(() => {
      navigate("/home");
    }, 5000);
  };

  const onSubmit = async (data) => {
    try {
        await apiWrapper("user/register", "POST", {
          nombre:data.nombre,
          email:data.email,
            password:data.password,
            apellido:data.apellido
        })
        .then(
            (data)=> {
console.log(data);
handleSuccessfulRegistration(data);
      });
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.", {
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

        <h2>Rellena el formulario y únete a JobLink</h2>
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="reg-img">
            <img src="./img/Vector.png" alt="logo" />
          </div>

          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            minLength="3"
            {...register("nombre", { required: true })}
          />
          {errors.nombre && (
            <span className="error-msg">Este campo es requerido</span>
          )}

          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            minLength="3"
            placeholder="Apellido"
            {...register("apellido", { required: true })}
          />
          {errors.apellido && (
            <span className="error-msg">Este campo es requerido</span>
          )}

<label htmlFor="email">Correo electrónico</label>
<input
  type="email"
  placeholder="youremail@gmail.com"
  {...register("email", { required: true })}
/>
{errors.email && (
  <span className="error-msg">Este campo es requerido</span>
)}

<label htmlFor="password">Elige una contraseña</label>
<input
  type="password"
  minLength="4"
  placeholder="********"
  id="password"
  name="password"
  {...register("password", { required: true })}
/>
{errors.password && (
  <span className="error-msg">Este campo es requerido</span>
)}

<button className="submit-button" type="submit">
  Registrarme
</button>

<button className="link-btn" onClick={() => navigate("/")}>
  ¿Ya tienes una cuenta? Inicia sesión aquí.
</button>
</form>
</div>
</>
);
};

export default Register;

