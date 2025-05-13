import React from "react";

import Card from "./components/basicos/layout/Card"; 
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default (_) => (
  <div id="app">
    <h1>Fundamentos React </h1>

    <Card> titulo="Exemplo de card"
      
    </Card>

    <Aleatorio min={1} max={60} />
    <Fragmento />
    <ComParametro titulo="Situacao do Aluno" aluno=" Pedro Silva" nota={9.3} 
    />
    <Primeiro></Primeiro>
  </div>
);
