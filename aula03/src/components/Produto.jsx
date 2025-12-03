import React from 'react'

const Produto = ({nome, quantidade, status}) => {
  return (
    <div>
        <p>
            Nome: {nome}
        </p>
        <p>
            Quantidade: {quantidade}
        </p>
        <p>
            Status: {status}
        </p>
    </div>
  )
}

export default Produto