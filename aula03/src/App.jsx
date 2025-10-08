import React from 'react'
import Aluno from './components/Aluno'
import Produto from './components/Produto';

const App = () => {
  const estoque = [
      {
        nome: "cuscuz", quantidade: 3
      },
      {
        nome: "açucar", quantidade: 4
      },
      {
        nome: "sal", quantidade: 7
      }

  ]

  return (
    <div>
      {estoque.map((produto) => {
        const status = produto.quantidade > 0 ? "DISPONIVEL" : "ESGOTADO"

        return (
          <Produto 
            nome={produto.nome} 
            quantidade={produto.quantidade} 
            status={status}
          />
        );
      })}
    </div>
  );
};

export default App