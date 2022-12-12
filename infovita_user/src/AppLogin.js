import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

import './AppLogin.css';

function Login() {
    const { signin } = useAuth();
    
    const navigate = useNavigate();

    return(
        <>
            <div className="login">
                <h1>INFOVITA</h1>
                <p>O caminho certo para o seu diagnóstico</p>

                <br />

                <h4>Faça o login</h4>
                <Button className="primary">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            const token = (jwt_decode(credentialResponse.credential));

                            navigate('/home');

                            signin(token.name, token.email, token.picture);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </Button>
            </div>
        </>
    );
};

export default Login;