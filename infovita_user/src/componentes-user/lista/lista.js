import React from "react";
import { Button, Input } from "reactstrap";
import { BsSearch } from 'react-icons/bs';
import { AiOutlineReload } from 'react-icons/ai';
import { IoMdOpen } from 'react-icons/io';

import './lista.css';

import { carregarEstabs } from './lista-functions';

function Lista() {
    return(
        <>  
            <div className="body">                
                <section className="left">
                    <div className="search">
                        <Input placeholder="Digite o estabelecimento"/>
                        <Button color="primary"> <BsSearch /> </Button>
                        <Button color="primary" onClick={carregarEstabs}> <AiOutlineReload /> </Button>
                    </div>

                    <hr />
                    
                    <li id="li-estabelecimentos">
                    </li>
                </section>

                <section className="right">

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
}

export default Lista;