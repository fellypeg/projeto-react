import React from 'react'

const Aluno = ({nome, email, curso, media, Status}) => {
  return (
    <div>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>Curso: {curso}</p>
        <p>Media: {media}</p>
        <p>Status: {media >= 7 ? "Aprovado" : "Reprovado"}</p>
         
    </div>
  )
}

export default Aluno