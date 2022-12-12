import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../AppLogin';
import Perfil from '../componentes-user/perfil/perfil';
import Home from '../componentes-user/home/home';

import useAuth from '../hooks/useAuth';

const Private = ({ Item }) => {
    const { signed } = useAuth();
    return signed == 1 ? <Item/> : <Login/>;
};

export default function RotasUser() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/perfil" element={<Private Item={Perfil}/>}/>
            <Route path="/home" element={<Private Item={Home}/>}/>
        </Routes>
    )
}