import React from 'react'

const Header = (props) => {
  return (
    <div>
        <h1>Bienvenidos al {props.titulo}</h1>
        <p>{props.descripcion}</p>
    </div>
  )
}

export default Header