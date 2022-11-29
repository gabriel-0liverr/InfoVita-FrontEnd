import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import { AiOutlineReload } from 'react-icons/ai';

import './estabelecimentos.css';

import { carregarEstabs, adicionar, showAdd, hideAdd, showEdit, hideEdit } from './estab-functions';

function Estabelecimentos() {
    return(
        <>  
            <div className="body">
                <div className="left">
                    <h4>Estabelecimentos</h4>
                    <Link to='/home'>
                        <button>Voltar</button>
                    </Link>
                </div>
                
                <section className="middle">
                    <div className="search">
                        <input placeholder="Digite o estabelecimento"/>
                        <button> <BsSearch /> </button>
                        <button onClick={carregarEstabs}> <AiOutlineReload /> </button>
                    </div>

                    <hr />
                        <button id="mostrarAdd" onClick={showAdd}>Adicionar Estabelecimento</button>

                        <form id="form-add">
                            <input id="addNome" placeholder="Nome do Estabelecimento"></input>
                            <input id="addLocal" placeholder="Local GPS"></input>
                            <button id="adicionarAdd" onClick={adicionar}>Adicionar</button>
                            <button id="cancelarAdd" onClick={hideAdd}>Cancelar</button>
                        </form>
                    <hr />
                    
                    <li id="li-estabelecimentos">
                    </li>
                </section>

                <section className="right">
                    <h2 className="estabDado" id="estabNome">Estabelecimento</h2>
                    <hr />
                    
                    <li id="li-dados">
                        <ul className="estabDado"  id="estabId">Dado</ul>
                        <ul className="estabDado"  id="estabLocal">Dado</ul>
                    </li>

                    <form id="form-edit">
                        <input id="editNome" placeholder="Nome do Estabelecimento"></input>
                        <input id="editLocal" placeholder="Local GPS"></input>
                        <button id="salvarEdit">Salvar Alterações</button>
                        <button id="cancelarEdit" onClick={hideEdit}>Cancelar</button>
                    </form>

                    <hr />

                    <div id="mostrarEdit">
                        <p>Para editar o Estabelecimento selecionado...</p>
                        <button onClick={showEdit}>Editar</button>
                    </div>

                    <hr />
                    <p>Caso queira remover o Estabelecimento selecionado...</p>
                    <button id="removerEstab">Remover</button>
                </section>
            </div>
        </>
    )
}

export default Estabelecimentos;