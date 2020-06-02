import React from 'react';
import './style.css'


export default function Item(props){
    return (
    <div className="itemCard">
        <h2>{props.titulo}</h2>
        <h5>De: {props.autor}</h5>
        <p>{props.descricao}</p>
        <button>Entrar em Contato</button>
    </div>);
}