import React from 'react';
import Pai from './components/Pai';
import Filho from './components/Filho';

const App = () => {
  return (
    <div>
      <Pai />
      <hr />
      <h2>Chamada direta do Componente Filho</h2>
      <Filho mensagemDoPai="Mensagem direta do pai para o filho" />
    </div>
  );
};

export default App;
