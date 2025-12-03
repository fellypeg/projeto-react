import React from 'react'
import StyleS from './Campanha.module.css'

const Campanha = (props) => {

    function definirMensagem(mes) {
        if (mes === "setembro" ) {
            return "prevenção ao suicídio"
        } else if (mes === "outubro") {
            return "conscientização sobre o câncer de mama"
        } else if (mes === "novembro") {
            return "prevenção e combate ao câncer de próstata"
        }
    }
    

    function definirCor(mes) {
        if (mes === "setembro" ) {
            return StyleS.setembro
        } else if (mes === "outubro") {
            return StyleS.outubro
        } else if (mes === "novembro") {
            return StyleS.novembro
        }
    }

  return (
    <div className={definirCor(props.mes)}>
        {definirMensagem(props.mes)}
    </div>
  )
}

export default Campanha