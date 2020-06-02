import React from 'react';
import './style.css'


export default function Botao(props){
    return (
    <div className={`btn ${props.cor}`}>
        <span>{props.texto}</span>
    </div>);
}

Botao.defaultProps = {
    texto: "ação",
    cor: "vermelho"
}