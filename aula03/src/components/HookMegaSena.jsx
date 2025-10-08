import React, { useState } from 'react'

const HookMegaSena = () => {

    const [numeroSorteado, setNumeroSorteado] = useState(null);
  const [numerosSorteados, setNumerosSorteados] = useState([]);

  const sortearNumero = () => {
    if (numerosSorteados.length >= 6) {
      alert("numeros já sorteados!");
      return;
    }

    const novoNumero = Math.floor(Math.random() * 60) + 1;

    
    if (numerosSorteados.includes(novoNumero)) {
      sortearNumero();
    } else {
      setNumeroSorteado(novoNumero);
      setNumerosSorteados([...numerosSorteados, novoNumero]);
    }
  };
    const resetArray = () => {
        setNumeroSorteado(null);
        setNumerosSorteados([])
    }
    
    return (
    <div>
        <h2>Sorteador Mega Sena</h2>

        <button onClick={sortearNumero}>Sortear Numero</button>
        <button onClick={resetArray}>Resetar</button>
        <p>
            Ultimo numero do sorteio: {" "}
            {numeroSorteado !== null ? numeroSorteado : "-"}
        </p>
        
        <p>
        Sorteados: {numerosSorteados.length > 0 ? numerosSorteados.join(" - ") : "-"}
        </p>
    </div>
  )
}

export default HookMegaSena