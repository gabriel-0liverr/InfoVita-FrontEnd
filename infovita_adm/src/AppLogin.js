import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

import './AppLogin.css';

// Import the functions you need from the SDKs you need
import { auth } from "./services/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';


function Login() {
    const { signin } = useAuth();
    
    const navigate = useNavigate();

    /* eslint-disable no-unused-vars */

    function entrar(event) {
        event.preventDefault();

        let email = document.getElementById("email").value;
        let senha = document.getElementById("senha").value;
    
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            signin(email);
            navigate('/home');
            alert("Você entrou!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Falha ao entrar!");
        });
    };

    /* eslint-enable no-unused-vars */

    return(
        <>
            <div className="login">
                <h1>INFOVITA/ADM</h1>

                <br />
                <h4>Login</h4>
                <form className="login">
                    <input type={'email'} placeholder={'Email'} id={'email'}></input>
                    <br/>
                    <input type={'password'} placeholder={'Senha'} id={'senha'}></input>
                    <hr/>
                    <button onClick={entrar}>Entrar</button>
                </form>
            </div>
        </>
    );
};

export default Login;