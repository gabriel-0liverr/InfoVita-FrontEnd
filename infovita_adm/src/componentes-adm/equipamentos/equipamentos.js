import React from "react";
import { Link } from "react-router-dom";

import './equipamentos.css';

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
                
                <section className="equipList">
                    <div className="search">
                        <input placeholder="Digite o equipamento"/>
                        <button>Search</button>
                    </div>

                    <hr />
                    <button id="adicionarEquip"> Adicionar Equipamento</button>
                    <hr />
                    
                    <li>
                        <ul className="equip">item</ul>
                        <ul className="equip">item</ul>
                        <ul className="equip">item</ul>
                        <ul className="equip">item</ul>
                        <ul className="equip">item</ul>
                        <ul className="equip">item</ul>
                        <ul className="equip">item</ul>
                    </li>
                </section>

                <section className="equipData">
                    <h2 className="equipDado" id="equipNome">Nome do Equipamento</h2>
                    <hr />
                    
                    <li id="li-dados">
                        <ul className="equipDado"  id="equipId">Identificador</ul>
                    </li>

                    <form id="form-edicao">
                        <input id="equipNome" placeholder="Nome do Equipamento"></input>
                        <button id="editarEquip">Salvar Alterações</button>
                        <button id="cancelarEdit">Cancelar</button>
                    </form>

                    <hr />

                    <p>Para editar o Equipamento selecionado...</p>
                    <button id="editar">Editar</button>

                    <hr />
                    <p>Caso queira remover o Equipamento selecionado...</p>
                    <button id="removerEquip">Remover</button>
                </section>
            </div>
        </>
    )
}

export default Equipamentos;