import React from 'react';
import {Routes,Route} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import Login from '../AppLogin';
import Home from '../componentes-adm/home/home'
import Equipamentos from '../componentes-adm/equipamentos/equipamentos';
import Estabelecimentos from '../componentes-adm/estabelecimentos/estabelecimentos';

const Private = ({ Item }) => {
    const { signed } = useAuth();
    return signed > 0 ? <Item/> : <Login/>;
};

export default function RotasAdm() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Private Item={Home}/>}/>
            <Route path="/equipamentos" element={<Equipamentos/>}/>
            <Route path="/estabelecimentos" element={<Estabelecimentos/>}/>
        </Routes>
    )
}