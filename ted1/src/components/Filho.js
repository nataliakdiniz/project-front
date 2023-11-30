import React from 'react';

const Filho = (props) => {
  return (
    <>
      <h3>Componente Filho</h3>
      <p>Mensagem do Pai: {props.mensagemDoPai}</p>
    </>
  );
};

export default Filho;
