import React from 'react';
import Filho from './Filho';

const Pai = () => {
  const mensagem = "Esta é uma mensagem do pai para o filho";
  
  return (
    <>
      <h2>Componente Pai</h2>
      <Filho mensagemDoPai={mensagem} />
    </>
  );
};

export default Pai;
