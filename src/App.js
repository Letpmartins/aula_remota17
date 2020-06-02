import React from 'react';
import './Global.css';
import Card from './components/card';
import Pizza from './assets/img/Pizza.jpg'

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <img scr={Pizza} />
    </div>
  );
}

export default App;
