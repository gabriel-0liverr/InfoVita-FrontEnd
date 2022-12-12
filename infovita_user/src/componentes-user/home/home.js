import React from "react";
import { Button, Input } from "reactstrap";
import { BsSearch } from 'react-icons/bs';
import { AiOutlineReload } from 'react-icons/ai';

import { carregarEstabs } from './lista-functions';

import './home.css';

function Home() {
    return(
        <>  
            <div className="body">                
                <section className="left" id="left">
                    <h1 id="titulo">INFOVITA</h1>
                    <p id="subtitulo">O caminho certo para o seu diagnóstico</p>
                    <br/>
                    <div className="search">
                        <Input placeholder="Digite o estabelecimento"/>
                        <Button color="primary"> <BsSearch /> </Button>
                        <Button color="primary" onClick={carregarEstabs}> <AiOutlineReload /> </Button>
                    </div>
                    
                    <li id="li-estabelecimentos">
                    </li>
                </section>

                <section className="right" id="right">

                    <h2 className="estabDado" id="estabNome">Estabelecimento</h2>
                    <hr />

                    <iframe
                        title="estabMapa"
                        id="estabMapa"
                        width=""
                        height=""
                        style={{display: 'none'}}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="">
                    </iframe>
                    <hr />
                    
                    <li id="li-dados">
                        <ul className="estabDado"  id="estabId">Dado</ul>
                        <ul className="estabDado"  id="estabLocal">Dado</ul>
                    </li>
                </section>
            </div>
        </>
    )
};

export default Home;