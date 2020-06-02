import React from 'react';
import '../../Global.css';
import Card from '../../components/card';
import Pizza from '../../assets/img/Pizza.jpg';
import Header from '../../components/header';
import Botao from '../../components/botao';
import Item from '../../components/item';
import Container from '../../components/container';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <Card />
      <Card />
      <img src={Pizza} alt="foto da pizza"/>
      <Botao texto="Confirmar" cor="verde"/>
      <Botao texto="Excluir"/>
      <Container>
        <Item titulo="Alimentos" autor="Letícia" 
        descricao="teste teste teste teste teste teste 
        teste teste teste" />
        <Item titulo="Alimentos" autor="Letícia" 
        descricao="teste teste teste teste teste teste 
        teste teste teste" />
        <Item titulo="Alimentos" autor="Letícia" 
        descricao="teste teste teste teste teste teste 
        teste teste teste" />
        <Item titulo="Alimentos" autor="Letícia" 
        descricao="teste teste teste teste teste teste 
        teste teste teste" />
        <Item titulo="Alimentos" autor="Letícia" 
        descricao="teste teste teste teste teste teste 
        teste teste teste" />
      </Container>
    </div>
  );
}

export default App;