import React from 'react'

const Parent = ({children}) => {
    const texto = 'Este texto tiene que ser renderizado en cada hijo'
  return (
    <>
        <h1>Este es el componente padre</h1>
        {children(texto)}
    </>
  )
}

export default Parent