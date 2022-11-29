import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import { AiOutlineReload } from 'react-icons/ai';

import './equipamentos.css';

import { carregarEquips, showAdd, hideAdd, showEdit, hideEdit } from './equip-functions';


function Equipamentos() {
    return(
        <>  
            <div className="body">
                <div className="left">
                    <h2>Equipamentos</h2>
                    <Link to='/home'>
                        <button>Voltar</button>
                    </Link>
                </div>
                
                <section className="middle">
                    <div className="search">
                        <input placeholder="Digite o equipamento"/>
                        <button> <BsSearch /> </button>
                        <button onClick={carregarEquips}> <AiOutlineReload /> </button>
                    </div>

                    <hr />
                        <button id="mostrarAdd" onClick={showAdd}>Adicionar Equipamento</button>

                        <form id="form-add">
                            <input id="addNome" placeholder="Nome do Equipamento"></input>
                            <input id="addExames" placeholder="Exames"></input>
                            <button id="adicionarAdd">Adicionar</button>
                            <button id="cancelarAdd" onClick={hideAdd}>Cancelar</button>
                        </form>
                    <hr />
                    
                    <li id="li-equipamentos">
                    </li>
                </section>

                <section className="right">
                    <h2 className="equipDado" id="equipNome">Nome do Equipamento</h2>
                    <hr />
                    
                    <li id="li-dados">
                        <ul className="equipDado"  id="equipId">Dado do Equipamento</ul>
                        <ul className="equipDado"  >Dado do Equipamento</ul>
                    </li>

                    <form id="form-editar">
                        <input id="editNome" placeholder="Nome do Equipamento"></input>
                        <input id="editExames" placeholder="Exames"></input>
                        <button id="salvarEdit">Salvar Alterações</button>
                        <button id="cancelarEdit" onClick={hideEdit}>Cancelar</button>
                    </form>

                    <hr />

                    <p>Para editar o Equipamento selecionado...</p>
                    <button id="mostrarEdit" onClick={showEdit}>Editar</button>

                    <hr />
                    <p>Caso queira remover o Equipamento selecionado...</p>
                    <button id="removerEquip">Remover</button>
                </section>
            </div>
        </>
    )
}

export default Equipamentos;