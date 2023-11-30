// App.js
import React from 'react';
import TabelaProdutos from './TabelaProdutos';

const App = () => {
  // Exemplo de array de produtos
  const produtos = [
    { id: 1, nome: 'Produto A', preco: 20.0 },
    { id: 2, nome: 'Produto B', preco: 30.0 },
    // ... outros produtos
  ];

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <TabelaProdutos produtos={produtos} />
    </div>
  );
};

export default App;
