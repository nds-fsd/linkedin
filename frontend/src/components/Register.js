import React, {useState} from 'react';
import  "./Logina.css";

const Register= (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] =useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);}

        return (

            <>   
            <nav className='navbar'> 
            <div className='navbar_logo'>
            <h2>JobLInk</h2>
            </div>
            <div className='navbar_button'>
            <button className='navbtn_unirse'>Unirse</button>
            <button className='navbtn'>Iniciar Sesión</button>
            </div>
            </nav>   

            <div className="auth-form-container">
                <h2>Rellena el formulario y únete a JobLink</h2>
            <form className="register-form" onSubmit={handleSubmit}>
            <div className='reg-img'>
            <img src="./img/Vector.png" alt="logo" />
            </div>
                <label htmlFor="name">Nombre</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Name" />
                <label htmlFor="name">Appellidos</label>
                <input value={surname} name="surname" onChange={(e) => setSurname(e.target.value)} id="surname" placeholder="Surname" />
                
                <label htmlFor="email">Correo electrónico</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Elige una contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Registrarme</button>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            </form>
           
        </div>
        </>
        )
    }
export default Register