import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { BsSearch } from 'react-icons/bs';

import './home.css';

function Home() {
    return(
        <>  
            <div className="home">
                <h1>INFOVITA</h1>
                <p>O caminho certo para o seu diagnóstico</p>
                <br/>

                <div className="search">
                    <Input placeholder="Digite o estabelecimento"></Input>
                    <Link to={'/lista'}>
                        <Button color="primary"> <BsSearch /> </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;