// src/Formulario.js
import React, { useState } from 'react';

const Formulario = () => {
  // Estado para armazenar os valores dos campos de input
  const [campo1, setCampo1] = useState('');
  const [campo2, setCampo2] = useState('');

  // Função para lidar com a mudança nos campos de input
  const handleInputChange = (campo, valor) => {
    if (campo === 'campo1') {
      setCampo1(valor);
    } else if (campo === 'campo2') {
      setCampo2(valor);
    }
  };

  // Função para lidar com o clique no botão
  const handleButtonClick = () => {
    // Exibir os valores dos campos de input
    alert(`Valor do Campo 1: ${campo1}\nValor do Campo 2: ${campo2}`);
  };

  return (
    <div>
      {/* Campo de Input 1 */}
      <input
        type="text"
        value={campo1}
        onChange={(e) => handleInputChange('campo1', e.target.value)}
      />

      {/* Campo de Input 2 */}
      <input
        type="text"
        value={campo2}
        onChange={(e) => handleInputChange('campo2', e.target.value)}
      />

      {/* Botão */}
      <button onClick={handleButtonClick}>Exibir Valores</button>
    </div>
  );
};

export default Formulario;
