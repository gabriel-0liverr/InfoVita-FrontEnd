import React, {useState} from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';

import './nav.css';

function BarraNav() {
    const { signed } = useAuth();

    //Botao Perfil
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    //Ações Perfil
    const { user } = useAuth();
    const { signout } = useAuth();
    const navigate = useNavigate();

    function sair() {
        navigate('/');
        signout();
    }

    function verPerfil() {
        navigate('/perfil');
    }

    return(
        <nav>
            {signed ? (
                <Link style={{textDecoration: 'none', color: 'black', padding: '0px'}} to="/home">Home</Link>
            ) : (
                <Link style={{textDecoration: 'none', color: 'black', padding: '8px'}} to="/home">Home</Link>
            )}
            
            
            {signed ? (
                <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={'down'}>
                    <DropdownToggle caret color="white">
                        <img id="img-perfil"
                            src={user.picture}
                            alt={'Profile'}
                            width={'30px'}
                        />
                        {user.name}
                    </DropdownToggle>

                    <DropdownMenu>
                        <DropdownItem onClick={verPerfil}>Perfil</DropdownItem>
                        <DropdownItem onClick={sair}>Sair</DropdownItem>
                    </DropdownMenu>
                </Dropdown>      
            ) : ('')}  
        </nav>
    )
}

export default BarraNav;