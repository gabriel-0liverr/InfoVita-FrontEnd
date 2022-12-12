import React from "react";
import './perfil.css';
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

function Perfil() {
    const { user } = useAuth();
    const { signout } = useAuth();
    const navigate = useNavigate();

    function sair() {
        navigate('/');
        signout();
    }
    return(
        <div className="perfil">
            <h1>Perfil</h1>
            
            <div>
                <img src={user.picture} alt={'Profile'}/>
                <br /><br />
                <p>Nome: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>

            <Button onClick={sair}>Sair da Conta</Button>
        </div>
    )
}
export default Perfil;