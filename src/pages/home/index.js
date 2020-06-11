import React from 'react';
import '../../Global.css';
// import Card from '../../components/card';
// import Pizza from '../../assets/img/Pizza.jpg';
import Header from '../../components/header';
// import Botao from '../../components/botao';
import Item from '../../components/item';
import Container from '../../components/container';
import { useState } from 'react';

function Home() {
    const [listaItens, setListaItens] = useState([<Item/>, <Item/>, <Item/>]);
    function addDoacao(){
        setListaItens([...listaItens, <Item/>])
    }
  return (
    <div className="App">
      <Header />
      <div>
          <h1>Lista de Doações</h1>
          <button onClick={addDoacao}>Criar Doação</button>
      </div>
      <Container>{listaItens}      </Container>
    </div>
  );
}

export default Home;