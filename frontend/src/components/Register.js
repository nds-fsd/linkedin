import React, {useState} from 'react';
import  "./logina.css";
import Logo from "./logo"

const Register= (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] =useState('')

    const handleSubmit = () => {
        const url = 'http://localhost:3001/';
        const body = {
            name,
            surname,
            email,
            password
        };
        
        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body),
        }
        fetch(url, options)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            reloadPage();
        });
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
            <form className="register-form" onSubmit={handleSubmit}>
            <div className='reg-img'>
            <img src="./img/Vector.png" alt="logo" />
            </div>
                <label htmlFor="name">Nombre</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Name" />
                <label htmlFor="name">Apellidos</label>
                <input value={surname} name="surname" onChange={(e) => setSurname(e.target.value)} id="surname" placeholder="Surname" />
                
                <label htmlFor="email">Correo electrónico</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Elige una contraseña</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" onClick={handleSubmit}>Registrarme</button>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            </form>
           
        </div>
        </>
        )
    }
export default Register