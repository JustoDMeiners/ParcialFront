import React from 'react'
import Objetos from './data.json'
import Post from './Post'
// El componente Posteos es el padre de:
// - Post (multiplicados por lo que haya en el listado JSON)
// ESTADO: Posteos no necesita manejar un estado.
// MÉTODOS: Posteos no requiere de métodos.
// PROPS: Posteos recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos junto con el resto de las props que necesitan.

export default function Posteos() {



  return (
    <div className='container'>
      {Objetos.map((objeto) => <Post key={objeto.id} listado={objeto} />)}
      
    </div>
  )
}
