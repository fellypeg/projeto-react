import React from 'react'   
import { useState } from 'react'

const HookContador = () => {

    const [Contador, setContador] = useState(1)

    function incrementar() {
        setContador(Contador + 1)
    }

    function decrementar() {
        setContador(Contador - 1)
    }

  return (
    <div>
        <h1>Contador com useState</h1>
        <button onClick={incrementar}>incrementar Contador</button>
        <h1>O Contador está em: {Contador}</h1>
        <button onClick={decrementar}>decrementar Contador</button>y
    </div>
  )
}

export default HookContador