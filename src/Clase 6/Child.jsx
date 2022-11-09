import React from 'react'

const Child = ({texto, numero}) => {
  return (
    <div>
        <h3>Este es el contenido del primer hijo</h3>
        <p>{texto}</p>
        <h1>{numero}</h1>
    </div>
  )
}

export default Child