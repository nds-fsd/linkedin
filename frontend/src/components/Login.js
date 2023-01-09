import React, {useState} from 'react';
import  "./Logina.css";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

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
        <div className='big_container'>
            
          <div className="auth_form_container">
           
            <form className="login_form" onSubmit={handleSubmit}>
            
            <h1>Te damos <br></br>la bienvenida</h1>
            <h3>La comunidad donde profesionales <br></br>connectan con profesionales</h3>     
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="correo electrónico" id="email" name="email" />         
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Contraseña" id="password" name="password" />
                <button type="submit">Iniciar Sesión</button>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            </form>
         
        </div>
        <div className='logoIntro'>
        <img src="./img/isometric-home 1.png" />
<p>ciao, tesst</p>
        </div>
        </div>
        </>

    )
}
export default Login